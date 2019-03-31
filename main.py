from decimal import *

def minor_m(matrix):

    d = len(matrix) # Set matrix dimensions

    minors = [[[] for j in range(d)] for i in range(d)]

    for i in range(d):
        for j in range(d):
            minor = []
            for x, row in enumerate(matrix):
                if x != i:
                    minorsx = []
                    for y, element in enumerate(row):
                        if y != j:
                            minorsx.append(element)
                    minor.append(minorsx)
            minors[i][j] = minor

    return minors


def determinant(matrix):
    d = len(matrix) # Set matrix dimensions

    if d == 1:
        return matrix[0][0]

    minors = minor_m(matrix)
    elementandminors = [[matrix[0][i], minors[0][i]] for i in range(d)]

    det = 0

    for i, element in enumerate(elementandminors):
        det += ((-1) ** i) * elementandminors[i][0] * determinant(elementandminors[i][1]);

    return det


def cofactor(matrix):

    d = len(matrix) # Set matrix dimensions

    minors = minor_m(matrix)

    cfmatrix = [[[] for j in range(d)] for i in range(d)]

    for i, row in enumerate(minors):
        for j, element in enumerate(row):
            cfmatrix[i][j] = ((-1) ** (i + j)) * determinant(minors[i][j])

    return cfmatrix


def transpose(matrix):
    d = len(matrix) # Set matrix dimensions
    tpmatrix = [[0 for j in range(d)] for i in range(d)]
    for i in range(d):
        for j in range(d):
            tpmatrix[j][i] = matrix[i][j]
    return tpmatrix

def adjugate(matrix):
    d = len(matrix)
    if d == 1:
        return [[1]]
    return transpose(cofactor(matrix))

def inverse(matrix):
    d = len(matrix) # Set matrix dimensions
    det = determinant(matrix)
    if det == 0:
        return None
    adj = adjugate(matrix)
    invmatrix = [[Decimal(element) / Decimal(det) for element in row] for row in adj]
    return invmatrix

def is_square(matrix):
    d = len(matrix)
    for row in matrix:
        if len(row) != d:
            return False
        for element in row:
            if not element and not element == 0:
                return False
    return True

def solve(matrix, constants):
    d = len(matrix) # Set matrix dimensions

    if not is_square(matrix):
        raise Exception('Not square matrix')
    if d != len(constants):
        raise Exception('Incorrect number of constants')
    for constant in constants:
        if not constant and not constant == 0:
            raise Exception('Incorrect number of constants')

    inv = inverse(matrix)
    if not inv:
        return None
    variables = []
    for i in range(d):
        answer = 0
        for j in range(d):
            answer += inv[i][j] * constants[j]
        variables.append(float(answer))
    return variables

# print(solve(
#     [
#       [1, 2, -3],
#       [-4, 5, 6],
#       [7, -8, 9]
#     ], [4, -3, 6]
# ))

print(
solve(
    [[2]],
    [1]
)
)
