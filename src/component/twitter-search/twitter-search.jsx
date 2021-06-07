import React, { useState } from "react"
import { Timeline } from "react-twitter-widgets"
import SmartForm from "../smart-form/smart-form"

const TwitterSearch = () => {
  const [screenName, updateScreenName] = useState("hubble_space")

  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName,
        }}
        options={{
          tweetLimit: "10",
        }}
      />

      <SmartForm updateScreenName={updateScreenName} />
    </div>
  )
}

export default TwitterSearch
