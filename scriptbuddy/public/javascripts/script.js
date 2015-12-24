$(function() {

	var result = [];

	function addToResult(item) {
		result.push(item);
	}

	function removeFromResult(item) {

		for (var i = 0; i < result.length; i++) {
			if (result[i] == item) {
				result.remove(i, i);
				break;
			}
		}
	}

	function produceResultString() {
		var sizeOfResult = result.length;

		if (sizeOfResult > 0) {
			var resultString = result[0];

			if (sizeOfResult > 1) {

				for (var i = 1; i < result.length; i++) {
					resultString += ',' + result[i];
				}
			}
		}
		return resultString;
	}

	function clear() {
		$('#result').prop('value', '');
		result = [];

		$('.checkboxes').each(function () {
			$(this).prop('checked', false);
		});
	}

	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};

	$('.checkboxes').on('click', function () {
		var changedComponent = $(this);
		var resultComponent = $('#result');
		var countryCode = changedComponent.prop('value');

		if (changedComponent.prop('checked')) {
			addToResult(countryCode);
			console.log('Adding: ' + countryCode);
		} else {
			removeFromResult(countryCode);
			console.log('Removing: ' + countryCode);
		}

		resultComponent.prop('value', produceResultString());
	});

	$('.clear').on('click', function () {
		clear();
	});
});
