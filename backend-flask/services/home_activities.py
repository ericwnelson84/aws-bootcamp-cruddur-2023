from datetime import datetime, timedelta, timezone
import logging

from lib.db import pool

class HomeActivities:
  def run(cognito_user_id):
    # logger.info("HomeActivities")
    now = datetime.now(timezone.utc).astimezone()

    sql = """
    SELECT * FROM activities
    """
    print(sql)
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(sql)
        # this will return a tuple
        # the first field being the data
        json = cur.fetchone()
    print("testing-----------------")
    print(cur.fetchone)
    return cur.fetchone


