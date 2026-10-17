SELECT 'Bajaj Auto' AS stock, COUNT(*) AS rows FROM bajaj_auto
UNION ALL
SELECT 'TVS Motors', COUNT(*) FROM tvs_motors
UNION ALL
SELECT 'Eicher Motors', COUNT(*) FROM eicher_motors
UNION ALL
SELECT 'Hero Motocorp', COUNT(*) FROM hero_motocorp
UNION ALL
SELECT 'Infosys', COUNT(*) FROM infosys
UNION ALL
SELECT 'TCS', COUNT(*) FROM tcs;

SELECT
    'Bajaj Auto' AS stock,
    MIN(date) AS first_date,
    MAX(date) AS last_date
FROM bajaj_auto

UNION ALL

SELECT 'TVS Motors', MIN(date), MAX(date)
FROM tvs_motors
UNION ALL
SELECT 'Eicher Motors', MIN(date), MAX(date)
FROM eicher_motors
UNION ALL
SELECT 'Hero Motocorp', MIN(date), MAX(date)
FROM hero_motocorp
UNION ALL
SELECT 'Infosys', MIN(date), MAX(date)
FROM infosys
UNION ALL
SELECT 'TCS', MIN(date), MAX(date)
FROM tcs;

-- =================================================
-- PART 1: GET TO KNOW THE DATA
-- TASK 1: HOW MUCH HISTORY DO WE HAVE?
-- =================================================

SELECT
    COUNT(*) AS trading_days,
    MIN(date) AS first_day,
    MAX(date) AS last_day
FROM bajaj_auto;


-- =================================================
-- TASK 2: EICHER'S FIVE BEST CLOSES
-- =================================================

SELECT
    date,
    close_price
FROM eicher_motors
ORDER BY close_price DESC
LIMIT 5;


-- =================================================
-- TASK 3: TCS, YEAR BY YEAR
-- =================================================

SELECT
    EXTRACT(YEAR FROM date)::INT AS year,
    ROUND(AVG(close_price), 2) AS avg_close
FROM tcs
GROUP BY EXTRACT(YEAR FROM date)
ORDER BY year;


-- =================================================
-- TASK 4: FIND THE HOLES
-- =================================================

SELECT 'bajaj_auto' AS stock, date
FROM bajaj_auto
WHERE deliverable_qty IS NULL
UNION ALL
SELECT 'eicher_motors' AS stock, date
FROM eicher_motors
WHERE deliverable_qty IS NULL
UNION ALL
SELECT 'hero_motocorp' AS stock, date
FROM hero_motocorp
WHERE deliverable_qty IS NULL

UNION ALL

SELECT 'infosys' AS stock, date
FROM infosys
WHERE deliverable_qty IS NULL

UNION ALL

SELECT 'tcs' AS stock, date
FROM tcs
WHERE deliverable_qty IS NULL

UNION ALL

SELECT 'tvs_motors' AS stock, date
FROM tvs_motors
WHERE deliverable_qty IS NULL
ORDER BY date, stock;


-- =================================================
-- TASK 5: MOVING AVERAGES
-- =================================================

DROP TABLE IF EXISTS bajaj1;

CREATE TABLE bajaj1 AS
WITH moving_data AS (
    SELECT
        date,
        close_price,
        ROW_NUMBER() OVER (ORDER BY date) AS rn,
        AVG(close_price) OVER (
            ORDER BY date
            ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
        ) AS avg20,
        AVG(close_price) OVER (
            ORDER BY date
            ROWS BETWEEN 49 PRECEDING AND CURRENT ROW
        ) AS avg50
    FROM bajaj_auto
)
SELECT
    date,
    close_price,
    CASE
        WHEN rn >= 20 THEN ROUND(avg20, 2)
        ELSE NULL
    END AS ma20,
    CASE
        WHEN rn >= 50 THEN ROUND(avg50, 2)
        ELSE NULL
    END AS ma50
FROM moving_data;

SELECT date, ma20, ma50
FROM bajaj1
WHERE ma20 IS NOT NULL
ORDER BY date
LIMIT 1;

SELECT date, ma50
FROM bajaj1
WHERE ma50 IS NOT NULL
ORDER BY date
LIMIT 1;

SELECT date, ma20
FROM bajaj1
WHERE date = '2018-07-31';


-- TASK 6: MASTER TABLE

DROP TABLE IF EXISTS master_table;

CREATE TABLE master_table AS
SELECT
    b.date,
    b.close_price AS bajaj,
    t.close_price AS tcs,
    v.close_price AS tvs,
    i.close_price AS infosys,
    e.close_price AS eicher,
    h.close_price AS hero
FROM bajaj_auto b
JOIN tcs t
    ON b.date = t.date
JOIN tvs_motors v
    ON b.date = v.date
JOIN infosys i
    ON b.date = i.date
JOIN eicher_motors e
    ON b.date = e.date
JOIN hero_motocorp h
    ON b.date = h.date;

SELECT COUNT(*) AS total_rows
FROM master_table;

SELECT *
FROM master_table
WHERE date = '2018-07-31';


-- TASK 7: GOLDEN CROSS SIGNALS

DROP TABLE IF EXISTS bajaj2;

CREATE TABLE bajaj2 AS
WITH signal_data AS (
    SELECT
        date,
        close_price,
        ma20,
        ma50,
        LAG(ma20) OVER (ORDER BY date) AS prev_ma20,
        LAG(ma50) OVER (ORDER BY date) AS prev_ma50
    FROM bajaj1
)
SELECT
    date,
    close_price,
    CASE
        WHEN ma20 IS NULL
          OR ma50 IS NULL
          OR prev_ma20 IS NULL
          OR prev_ma50 IS NULL
        THEN 'Hold'

        WHEN ma20 > ma50
         AND prev_ma20 <= prev_ma50
        THEN 'Buy'

        WHEN ma20 < ma50
         AND prev_ma20 >= prev_ma50
        THEN 'Sell'

        ELSE 'Hold'
    END AS signal
FROM signal_data;

SELECT *
FROM bajaj2
ORDER BY date
LIMIT 10;

SELECT date, close_price, signal
FROM bajaj2
WHERE signal = 'Buy'
ORDER BY date
LIMIT 1;

SELECT date, close_price, signal
FROM bajaj2
WHERE signal = 'Sell'
ORDER BY date
LIMIT 1;


-- TASK 8: HOW OFTEN DID IT TRIGGER?

SELECT
    signal,
    COUNT(*) AS signal_count
FROM bajaj2
GROUP BY signal
ORDER BY signal;


-- TASK 9: SIGNAL ON A GIVEN DAY

CREATE OR REPLACE FUNCTION bajaj_signal(d DATE)
RETURNS TEXT
LANGUAGE SQL
AS $$
    SELECT signal
    FROM bajaj2
    WHERE date = d;
$$;

SELECT bajaj_signal('2015-05-18');
SELECT bajaj_signal('2016-01-04');
SELECT bajaj_signal('2018-06-21');
SELECT bajaj_signal('2018-06-24');


-- TASK 10: ALL SIX STOCKS IN ONE QUERY

WITH prices AS (
    SELECT 'Bajaj Auto' AS stock, date, close_price FROM bajaj_auto
    UNION ALL
    SELECT 'Eicher Motors', date, close_price FROM eicher_motors
    UNION ALL
    SELECT 'Hero Motocorp', date, close_price FROM hero_motocorp
    UNION ALL
    SELECT 'Infosys', date, close_price FROM infosys
    UNION ALL
    SELECT 'TCS', date, close_price FROM tcs
    UNION ALL
    SELECT 'TVS Motors', date, close_price FROM tvs_motors
),
ma AS (
    SELECT
        stock,
        date,
        close_price,
        ROW_NUMBER() OVER (
            PARTITION BY stock ORDER BY date
        ) AS rn,
        AVG(close_price) OVER (
            PARTITION BY stock ORDER BY date
            ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
        ) AS avg20,
        AVG(close_price) OVER (
            PARTITION BY stock ORDER BY date
            ROWS BETWEEN 49 PRECEDING AND CURRENT ROW
        ) AS avg50
    FROM prices
),
averages AS (
    SELECT
        stock,
        date,
        close_price,
        CASE WHEN rn >= 20 THEN avg20 END AS ma20,
        CASE WHEN rn >= 50 THEN avg50 END AS ma50
    FROM ma
),
lagged AS (
    SELECT
        *,
        LAG(ma20) OVER (
            PARTITION BY stock ORDER BY date
        ) AS prev_ma20,
        LAG(ma50) OVER (
            PARTITION BY stock ORDER BY date
        ) AS prev_ma50
    FROM averages
),
signals AS (
    SELECT
        stock,
        date,
        CASE
            WHEN ma20 IS NULL OR ma50 IS NULL
              OR prev_ma20 IS NULL OR prev_ma50 IS NULL
                THEN 'Hold'
            WHEN ma20 > ma50 AND prev_ma20 <= prev_ma50
                THEN 'Buy'
            WHEN ma20 < ma50 AND prev_ma20 >= prev_ma50
                THEN 'Sell'
            ELSE 'Hold'
        END AS signal
    FROM lagged
),
counts AS (
    SELECT
        stock,
        COUNT(*) FILTER (WHERE signal = 'Buy') AS buys,
        COUNT(*) FILTER (WHERE signal = 'Sell') AS sells
    FROM signals
    GROUP BY stock
),
latest AS (
    SELECT
        stock,
        date AS last_signal_date,
        signal AS last_signal,
        ROW_NUMBER() OVER (
            PARTITION BY stock ORDER BY date DESC
        ) AS rn
    FROM signals
    WHERE signal IN ('Buy', 'Sell')
)
SELECT
    c.stock,
    c.buys,
    c.sells,
    l.last_signal_date,
    l.last_signal
FROM counts c
LEFT JOIN latest l
    ON c.stock = l.stock AND l.rn = 1
ORDER BY c.stock;


-- TASK 11: WHO WENT UP?

WITH prices AS (
    SELECT 'Bajaj Auto' AS stock, date, close_price FROM bajaj_auto
    UNION ALL
    SELECT 'Eicher Motors', date, close_price FROM eicher_motors
    UNION ALL
    SELECT 'Hero Motocorp', date, close_price FROM hero_motocorp
    UNION ALL
    SELECT 'Infosys', date, close_price FROM infosys
    UNION ALL
    SELECT 'TCS', date, close_price FROM tcs
    UNION ALL
    SELECT 'TVS Motors', date, close_price FROM tvs_motors
),
period_ends AS (
    SELECT
        stock,
        MIN(date) AS first_date,
        MAX(date) AS last_date
    FROM prices
    GROUP BY stock
)
SELECT
    p.stock,
    ROUND(first_p.close_price, 2) AS first_close,
    ROUND(last_p.close_price, 2) AS last_close,
    ROUND(
        100.0 * (last_p.close_price / first_p.close_price - 1),
        1
    ) AS pct_change
FROM period_ends p
JOIN prices first_p
    ON first_p.stock = p.stock
   AND first_p.date = p.first_date
JOIN prices last_p
    ON last_p.stock = p.stock
   AND last_p.date = p.last_date
ORDER BY pct_change DESC;


-- TASK 12: THE DATA TRAP

WITH prices AS (
    SELECT 'Bajaj Auto' AS stock, date, close_price FROM bajaj_auto
    UNION ALL
    SELECT 'Eicher Motors', date, close_price FROM eicher_motors
    UNION ALL
    SELECT 'Hero Motocorp', date, close_price FROM hero_motocorp
    UNION ALL
    SELECT 'Infosys', date, close_price FROM infosys
    UNION ALL
    SELECT 'TCS', date, close_price FROM tcs
    UNION ALL
    SELECT 'TVS Motors', date, close_price FROM tvs_motors
),
daily_moves AS (
    SELECT
        stock,
        date,
        close_price,
        LAG(close_price) OVER (
            PARTITION BY stock
            ORDER BY date
        ) AS previous_close
    FROM prices
),
ranked_moves AS (
    SELECT
        stock,
        date,
        close_price,
        ROUND(
            100.0 * (close_price / previous_close - 1),
            1
        ) AS pct_move,
        ROW_NUMBER() OVER (
            PARTITION BY stock
            ORDER BY (close_price / previous_close - 1)
        ) AS rn
    FROM daily_moves
    WHERE previous_close IS NOT NULL
)
SELECT
    stock,
    date,
    close_price,
    pct_move
FROM ranked_moves
WHERE rn = 1
ORDER BY pct_move;


-- TASK 13: FIX IT

WITH adjusted AS (
    SELECT
        'TCS' AS stock,
        date,
        CASE
            WHEN date < DATE '2018-05-31'
                THEN close_price / 2.0
            ELSE close_price
        END AS adj_close
    FROM tcs

    UNION ALL

    SELECT
        'Infosys' AS stock,
        date,
        CASE
            WHEN date < DATE '2015-06-15'
                THEN close_price / 2.0
            ELSE close_price
        END AS adj_close
    FROM infosys
),
period_prices AS (
    SELECT
        stock,
        MAX(CASE
            WHEN date = DATE '2015-01-01' THEN adj_close
        END) AS first_close,
        MAX(CASE
            WHEN date = DATE '2018-07-31' THEN adj_close
        END) AS last_close
    FROM adjusted
    GROUP BY stock
)
SELECT
    stock,
    ROUND(
        100.0 * (last_close / first_close - 1),
        1
    ) AS adjusted_pct_change
FROM period_prices
ORDER BY stock;

