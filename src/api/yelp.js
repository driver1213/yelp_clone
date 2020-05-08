import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -ogjHThShpBWoJV38t6VRhp72nHVLYBKgg6xD0qW__gprvSYOhShwMNryRS5oGJZ-PUmnIeUHcG2VWFllLsqKyruNE5SGhwO0pZKX2QlWiClJ7pE9_-lxhWYSKmvXnYx'
    }
})