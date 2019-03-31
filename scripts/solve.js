function error(err) {
  console.log('ERROR: ' + err);
  return undefined;
}

function minor_m(matrix) {
  var d = matrix.length;

  var minors = [];
  for (var i = 0; i < d; i++) {
    var minors_a = [];
    for (var j = 0; j < d; j++) {
      minors_a.push([]);
    }
    minors.push(minors_a);
  }

  for (var i = 0; i < d; i++) {
    for (var j = 0; j < d; j++) {
      var minor = [];
      for (var x = 0; x < matrix.length; x++) {
        if (x != i) {
          var minorsx = [];
          for (var y = 0; y < matrix[x].length; y++) {
            if (y != j) {
              minorsx.push(matrix[x][y]);
            }
          }
          minor.push(minorsx);
        }
      }
      minors[i][j] = minor;
    }
  }

  return minors;
}

function determinant(matrix) {
  var d = matrix.length;

  if (d == 1) {
    return matrix[0][0];
  }

  var minors = minor_m(matrix);
  var elementandminors = [];
  for (var i = 0; i < d; i++) {
    elementandminors.push([matrix[0][i], minors[0][i]]);
  }

  var det = 0;

  for (var i = 0; i < elementandminors.length; i++) {
    det += ((-1) ** i) * elementandminors[i][0] * determinant(elementandminors[i][1]);
  }

  return det;
}

function cofactor(matrix) {
  var d = matrix.length;
  var minors = minor_m(matrix);

  var cfmatrix = [];
  for (var  i = 0; i < d; i++) {
    var cfmatrix_a = [];
    for (var  j = 0; j < d; j++) {
      cfmatrix_a.push([]);
    }
    cfmatrix.push(cfmatrix_a);
  }

  for (var  i = 0; i < minors.length; i++) {
    for (var  j = 0; j < minors[i].length; j++) {
      cfmatrix[i][j] = ((-1) ** (i + j)) * determinant(minors[i][j]);
    }
  }
  return cfmatrix;
}

function transpose(matrix) {
  var d = matrix.length;
  var tpmatrix = [];
  for (var i = 0; i < d; i++) {
    var tpmatrix_a = [];
    for (var j = 0; j < d; j++) {
      tpmatrix_a.push(0);
    }
    tpmatrix.push(tpmatrix_a);
  }
  for (var i = 0; i < d; i++) {
    for (var j = 0; j < d; j++) {
      tpmatrix[j][i] = matrix[i][j];
    }
  }
  return tpmatrix;
}

function adjugate(matrix) {
  var d = matrix.length;
  if (d == 1) {
    return [[1]];
  }
  return transpose(cofactor(matrix));
}

function inverse(matrix) {
  var d = matrix.length;
  var det = determinant(matrix);
  // var det = 4;
  if (det == 0) {
    return undefined;
  }
  var adj = adjugate(matrix);
  var invmatrix = [];
  for (var i = 0; i < adj.length; i++) {
    var invmatrix_a = [];
    for (var j = 0; j < adj[i].length; j++) {
      invmatrix_a.push(adj[i][j] / det);
    }
    invmatrix.push(invmatrix_a);
  }
  return invmatrix;
}

function isSquare(matrix) {
  var d = matrix.length;
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i].length != d) {
      return false;
    }
    for (var j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j] && matrix[i][j] != 0) {
        return false;
      }
    }
  }
  return true;
}

function solve(matrix, constants) {
  var d = matrix.length;

  if (!isSquare(matrix)) {
    return error('Not square matrix');
  }
  if (d != constants.length) {
    return error('Incorrect number of constants');
  }
  for (var i = 0; i < constants.length; i++) {
    if (!constants[i] && constants[i] != 0) {
      return error('Incorrect number of constants');
    }
  }

  var inv = inverse(matrix);
  if (!inv) {
    return undefined;
  }
  var variables = [];
  for (var i = 0; i < d; i++) {
    var answer = 0;
    for (var j = 0; j < d; j++) {
      answer += inv[i][j] * constants[j];
    }
    variables.push(answer);
  }
  return variables;
}
