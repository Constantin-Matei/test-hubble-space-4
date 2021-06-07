import React from "react"
import { render } from "react-dom"
import TwitterSearch from "./component/twitter-search"
import "./index.css"

const here = document.querySelector("#here")
const twitterSearch = <TwitterSearch />

render(twitterSearch, here)
