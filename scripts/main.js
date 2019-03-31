function stripNumber(number) {
    return (parseFloat(number).toPrecision(12));
}

function showInputs() {
  $('#selectNumber').addClass('hidden');
  var n = parseInt($('#number').val());
  for (var i = 0; i < n; i++) {
    var item = '';
    for (var j = 0; j < n; j++) {
      item += '<input type="text" class="coeff" id="coeff-' + i.toString() + '-' + j.toString() + '"> X<sub>' + (j + 1).toString() + '</sub>';
      if (j == n - 1) {
        item += ' = ' + '<input type="text" class="const" id="const-' + i.toString() + '">'
      }
      else {
        item += ' + ';
      }
    }
    item += '<hr>';
    $('#inputs').append(item);
  }
  $('#inputs').removeClass('hidden');
}

function solveEq() {
  var n = parseInt($('#number').val());
  var matrix = [];
  var constants = [];
  for (var i = 0; i < n; i++) {
    var matrix_a = [];
    for (var j = 0; j < n; j++) {
      var coeff = eval($('#coeff-' + i.toString() + '-' + j.toString()).val() || 0);
      matrix_a.push(coeff);
    }
    matrix.push(matrix_a);
    var constant = eval($('#const-' + i.toString()).val() || 0);
    constants.push(constant);
  }
  var variables = solve(matrix, constants);
  $('#inputs').addClass('hidden');
  $('#result').removeClass('hidden');

  for (var i = 0; i < n; i++) {
    var item = '';
    for (var j = 0; j < n; j++) {
      item += '<b>' + matrix[i][j] + '</b> X<sub>' + (j + 1).toString() + '</sub>';
      if (j == n - 1) {
        item += ' = ' + '<b>' + constants[i] + '</b>'
      }
      else {
        if (matrix[i][j + 1] < 0) {
          item += ' <b>-</b> ';
          matrix[i][j + 1] = 0 - matrix[i][j + 1]
        }
        else {
          item += ' <b>+</b> ';
        }
      }
    }
    item += '<br>';
    $('#equations').append(item);
  }

  if (!variables) {
    $('#solution').append('<div class="text-center">There is no unique solution.</div>');
    return;
  }

  var solution = '';
  for (var i = 0; i < variables.length; i++) {
    var variable = stripNumber(variables[i]);
    if (variable % 1 == 0) {
      variable = parseInt(variable);
    }
    else {
      variable = parseFloat(variable);
    }
    solution += 'X<sub>' + (i + 1).toString() + '</sub> = <b>' + variable.toString() + '</b><br>';
  }
  $('#solution').append(solution);
}
