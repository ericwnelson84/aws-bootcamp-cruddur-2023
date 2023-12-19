from datetime import datetime, timedelta, timezone
import logging

from lib.db import pool, query_wrap_array

class HomeActivities:
  def run(cognito_user_id):
    # logger.info("HomeActivities")
    now = datetime.now(timezone.utc).astimezone()
    sql = query_wrap_array("""
    SELECT * FROM activities
    """)
    print(sql)
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(sql)
        # this will return a tuple
        # the first field being the data
        json = cur.fetchone()
    print("testing-----------------")
    return json[0]


