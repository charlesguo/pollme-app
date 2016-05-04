// Controller for the poll list
function PollListCtrl($scope, Poll) {
	$scope.polls = Poll.query();
}

// Controller for an individual poll
function PollItemCtrl($scope, $routeParams, socket, Poll) {
	$scope.poll = Poll.get({pollId: $routeParams.pollId});
  // console.log('controller is called');
  alert('PollItemCtrl (outside of socket.on): ' + socket.id);

	socket.on('myvote', function(data) {
		// console.dir(data);
		if(data._id === $routeParams.pollId) {
			$scope.poll = data;
      alert('PollItemCtrl (inside of socket.on myvote): ' + socket.id);
      console.log('PollItemCtrl (inside of socket.on myvote): ' + socket.id);
		}
	});

	socket.on('vote', function(data) {
		// console.dir(data);
		if(data._id === $routeParams.pollId) {
			$scope.poll.choices = data.choices;
			$scope.poll.totalVotes = data.totalVotes;
      alert('PollItemCtrl (inside of socket.on vote): ' + socket.id);
      console.log('PollItemCtrl (inside of socket.on vote): ' + socket.id);
		}
	});

	$scope.vote = function() {
		var pollId = $scope.poll._id,
				choiceId = $scope.poll.userVote;

		if(choiceId) {
			var voteObj = { poll_id: pollId, choice: choiceId, socket_id: socket.id };
			socket.emit('send:vote', voteObj);
      console.log('PollItemCtrl (inside of $scope.vote): ' + socket.id);
      alert('PollItemCtrl (inside of $scope.vote): ' + socket.id);
		} else {
			alert('You must choose an option to vote for');
		}
	};
}

// Controller for creating a new poll
function PollNewCtrl($scope, $location, Poll) {
	// Define an empty poll model object
	$scope.poll = {
		question: '',
		choices: [ { text: '' }, { text: '' }]
	};

	// Method to add an additional choice option
	$scope.addChoice = function() {
		$scope.poll.choices.push({ text: '' });
	};

	// Validate and save the new poll to the database
	$scope.createPoll = function() {
		var poll = $scope.poll;

		// Check that a question was provided
		if(poll.question.length > 0) {
			var choiceCount = 0;

			// Loop through the choices, make sure at least two provided
			for(var i = 0; i < poll.choices.length; i++) {
				var choice = poll.choices[i];

        // text provided in each of the choices cannot be empty
				if(choice.text.length > 0) {
					choiceCount++
				}
			}

			if(choiceCount > 1) {
				// Create a new poll from the model
				var newPoll = new Poll(poll);

				// Call API to save poll to the database
				newPoll.$save(function(p, resp) {
					if(!p.error) {
						// If there is no error, redirect to the main view
						$location.path('polls');
					} else {
						alert('Could not create poll');
					}
				});
			} else {
				alert('You must enter at least two choices.');
			}
		} else {
			alert('You must enter a question.');
		}
	};
}
