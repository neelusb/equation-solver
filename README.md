# Simultaneous Equation Solver

A script that solves systems of equations with any number of variables.

<h2 class="text-center">How it works</h2>
<p>
  The coefficients are put into a matrix A, the variables into a vector <b>v</b> and the constants into a vector <b>c</b>.<br>
  i.e. A<b>v</b> = <b>c</b><br>
  The inverse of A is then multiplied through the equation.<br>
  A<sup>-1</sup>A<b>v</b> = A<sup>-1</sup><b>c</b><br>
  <b>v</b> = A<sup>-1</sup><b>c</b><br>
  The variables can then be found by multiplying A<sup>-1</sup> by <b>c</b>.
</p>
<hr>
<h3>Finding A<sup>-1</sup></h3>
<p>
  A<sup>-1</sup> = adj(A)/det(A), where adj(A) is the adjugate matrix of A and det(A) is the determinant of A.
</p>
<h4>Finding the determinant</h4>
<p>
  The determinant of a matrix can be found by multiplying each element in any given row of the matrix by the minor of the element. These are then added if the element's indices are both even or odd, or subtracted if the element's indices are not both odd/even.<br>
  The process of finding a determinant is therefore iterative and is done recursively in this script.<br>
  <b>Important note: A determinant of 0 indicates that the system of equations has no unique solution (no solutions or an infinite number of solutions).</b>
</p>
<h4>Finding the adjugate matrix</h4>
<p>
  The adjugate of a matrix is the transpose of the cofactor matrix.<br>
  The cofactor of each element in a matrix is found by the minor matrix to the element and then, similarly to when finding the determinant, multiplying by -1 if the element's indices are not both odd/even.<br>
  The cofactor matrix is then transposed (rows and columns are switched) to find the adjugate.
</p>
<h4>Finding the inverse matrix</h4>
<p>The adjugate can then be divided by the determinant to find the inverse matrix.</p>
<hr>
<h3>Finding variables</h3>
<p>
  <b>v</b> = A<sup>-1</sup><b>c</b><br>
  The multiplication is then carried out in order to find the value of each variable.
</p>
<hr>
<h2>An example</h2>
<p>
  2x + y - z = 5<br>
  3x - y + 2z = -1<br>
  x - y - z = 0<br>
</p>
<hr>
<h3>Step 1: Set up matrix and vectors</h3>
<p>
  <table class="matrix">
    <tr>
      <td>2</td>
      <td>1</td>
      <td>-1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>-1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
      <td>-1</td>
      <td>-1</td>
    </tr>
  </table>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <table class="matrix">
    <tr>
      <td>x</td>
    </tr>
    <tr>
      <td>y</td>
    </tr>
    <tr>
      <td>z</td>
    </tr>
  </table>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <table class="equals">
    <tr rowspan="3">
      <td>
        =
      </td>
    </tr>
  </table>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <table class="matrix">
    <tr>
      <td>5</td>
    </tr>
    <tr>
      <td>-1</td>
    </tr>
    <tr>
      <td>0</td>
    </tr>
  </table>

</p>
<p>
  A<b>v</b> = <b>c</b><br>
  A<sup>-1</sup>A<b>v</b> = A<sup>-1</sup><b>c</b><br>
  <b>v</b> = A<sup>-1</sup><b>c</b><br>
</p>
<hr>
<h3>Step 2: Find A<sup>-1</sup></h3>
<p>
  A<sup>-1</sup> = adj(A)/det(A)
</p>
<h4>Finding adj(A)</h4>
<p>
  The minor matrix for the top left element can be found by ignoring the column and row the element is in and taking the determinant of the remaining matrix.<br>
  <table class="matrix">
    <tr>
      <td class="c1">2</td>
      <td class="c2">1</td>
      <td class="c2">-1</td>
    </tr>
    <tr>
      <td class="c2">3</td>
      <td class="c3">-1</td>
      <td class="c3">2</td>
    </tr>
    <tr>
      <td class="c2">1</td>
      <td class="c3">-1</td>
      <td class="c3">-1</td>
    </tr>
  </table><br>
  The minor for the top left element is therefore the determinant of
  <table class="matrix">
    <tr>
      <td>-1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>-1</td>
      <td>-1</td>
    </tr>
  </table>
  &nbsp;&nbsp;
  <table class="equals">
    <tr rowspan="3">
      <td>
        = (-1)(-1) - 2(-1) = 1 + 2 = 3
      </td>
    </tr>
  </table>



  <br>
  The cofactor of the top left element is just the minor since the indices of the element are 1 1 which are both odd.
  This process can be repeated to obtain the following cofactor matrix:<br>
  C =&nbsp;&nbsp;
  <table class="matrix">
    <tr>
      <td>3</td>
      <td>5</td>
      <td>-2</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-1</td>
      <td>3</td>
    </tr>
    <tr>
      <td>1</td>
      <td>-7</td>
      <td>-5</td>
    </tr>
  </table>
  <br>
  <br>
  <b>adj(A) = C<sup>T</sup> = &nbsp;&nbsp;<table class="matrix">
    <tr>
      <td>3</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>5</td>
      <td>-1</td>
      <td>-7</td>
    </tr>
    <tr>
      <td>-2</td>
      <td>3</td>
      <td>-5</td>
    </tr>
  </table></b>
</p>
<h4>Finding A<sup>-1</sup></h4>
<p>
  A<sup>-1</sup> = adj(A)/det(A)<br>
  det(A) = 13<br>
  adj(A) = &nbsp;&nbsp;
  <table class="matrix">
    <tr>
      <td>3</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>5</td>
      <td>-1</td>
      <td>-7</td>
    </tr>
    <tr>
      <td>-2</td>
      <td>3</td>
      <td>-5</td>
    </tr>
  </table>
  <br><br>
  <b>
    A<sup>-1</sup> = &nbsp;&nbsp;<table class="matrix">
      <tr>
        <td>3/13</td>
        <td>2/13</td>
        <td>1/13</td>
      </tr>
      <tr>
        <td>5/13</td>
        <td>-1/13</td>
        <td>-7/13</td>
      </tr>
      <tr>
        <td>-2/13</td>
        <td>3/13</td>
        <td>-5/13</td>
      </tr>
    </table>
  </b>
</p>
<hr>
<h3>Step 3: Solving for variables</h3>
<p>
  <b>v</b> = A<sup>-1</sup><b>c</b><br>
  <table class="matrix">
    <tr>
      <td>x</td>
    </tr>
    <tr>
      <td>y</td>
    </tr>
    <tr>
      <td>z</td>
    </tr>
  </table>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <table class="equals">
    <tr rowspan="3">
      <td>
        =
      </td>
    </tr>
  </table>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <table class="matrix">
    <tr>
      <td>3/13</td>
      <td>2/13</td>
      <td>1/13</td>
    </tr>
    <tr>
      <td>5/13</td>
      <td>-1/13</td>
      <td>-7/13</td>
    </tr>
    <tr>
      <td>-2/13</td>
      <td>3/13</td>
      <td>-5/13</td>
    </tr>
  </table>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <table class="matrix">
    <tr>
      <td>5</td>
    </tr>
    <tr>
      <td>-1</td>
    </tr>
    <tr>
      <td>0</td>
    </tr>
  </table>
</p>
<p>
  The matrix can then be multiplied with the vector to get:<br>

  <table class="matrix">
    <tr>
      <td>x</td>
    </tr>
    <tr>
      <td>y</td>
    </tr>
    <tr>
      <td>z</td>
    </tr>
  </table>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <table class="equals">
    <tr rowspan="3">
      <td>
        =
      </td>
    </tr>
  </table>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <table class="matrix">
    <tr>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>-1</td>
    </tr>
  </table>
</p>
<h3>Solutions</h3>
<p>
  <b>
    x = 1 <br>
    y = 2 <br>
    z = -1 <br>
  </b>
</p>

</div>
