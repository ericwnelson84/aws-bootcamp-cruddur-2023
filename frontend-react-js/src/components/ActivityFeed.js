import './ActivityFeed.css';
import ActivityItem from './ActivityItem';
import React from "react";

export default function ActivityFeed(props) {
  const [cognito_user_uuid, setId] = React.useState(null);
  let content;
  const load = async () => {
    const user = await props.user;
    setId(user.cognito_user_uuid)
  }
  load();
  console.log("cognito_user_uuid at ActivityFeed: ", cognito_user_uuid)
  if (props.activities.length === 0){
    content = <div className='activity_feed_primer'>
      <span>Nothing to see here yet</span>
    </div>
  } else {

    content = <div className='activity_feed_collection'>
      {props.activities.map(activity => {
      return  <ActivityItem cognito_user_uuid={cognito_user_uuid} setReplyActivity={props.setReplyActivity} setPopped={props.setPopped} key={activity.uuid} activity={activity} />
      })}
    </div>
  }


  return (<div>
    {content}
  </div>
  );
}