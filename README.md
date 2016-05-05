# PollNow: A Quick Way to Create Polls, Get Users to Vote and See Results

## Overview

<img src="public/images/github/pollnowtitlepage.jpg" width=512 height=437 >

[PollNow](https://pollnow.herokuapp.com) allows users to quickly create polls, get users to vote, and see the results of each poll.

### Requirements For Each Poll:
- Each question consists of a question with a minimum of 2 possible responses.
- The Poll Creator is able to increase the number of possible responses.
- The Poll Voter must select ONE of the possible responses in order to vote.

### Key Features of PollNow:
- (* The current implemented solution needs to be further improved.) PollNow is designed to allow voters to vote without actually requiring to sign in. PollNow detects whether a user has actually voted by storing the user's socket.request.connection.remoteAddress (or req.ip) value, which is either (in a IPv6 format) :::1 for a local development environment or an internally-reserved address such as ::ffff:10.238.23.36 in a production environment.

#### Why are we doing this?
Most of the time, users will be seen to have the same IP address i.e. that of the router's. If you have multiple computers connected to the network, you can check this by typing "What is my ip" in a Google Search Box. As such, the 'x-forwarded-for' property in socket.handshake.headers or req.headers cannot distinguish between such users.

However the issue with using the socket.request.connection.remoteAddress (or req.ip) property is that it changes every couple of minutes or so (depending on the router's setting). As such, it is not a foolproof way of distinguishing users.

Without requiring the user to authenticate before voting, a voter intent on "gaming" the system can always open another browser tab, use another browser, or use another device. However, the current implementation can still be improved by the 

 (each consisting of a question with a minimum of 2 possible responses), get users to  for a select set of key commodities, indices and equities.  Users can sign up for accounts and via JWT authentication, gain access to our data set through an API.  We also provide a visual interface on our app's front end, with a variety of charts available to investigate correlations.
