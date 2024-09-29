'use strict';

{

  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      //1 .... 15
      //  source[i] = i + 1 + 15 * 0;
      //16 ... 30
      //   source[i] = i + 1 + 15 * 1;
      //31 ... 45
      //   source[i] = i + 1 + 15 * 2;
      source[i] = i + 1 + 15 * col;
      //source の i 番目ですが、インデックスに 1 足したものを代入してあげれば、 1 から 15 までの数値になる
    }

    //Math.floor(Math.random() * (14 + 1))
    //Math.floor(Math.random() * source.length)

    const column = [];
    //最初の要素は、 splice() を使って source のランダムな位置のインデックスから 1 個取り出すとしてあげれば良い
    // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    for (let i = 0; i < 5; i++) {
      //i を 1 ずつ増やしながら、 b の i 番目 を作っていけばいいので、ここを i に変えてあげます。
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
      //そうすると、こちらでループが回って、ランダムに 5 つの要素が取り出される
    }


    //あとは column を返してあげれば OK
    return column;
  }

  function createColumns() {
    const columns = [];
    // columns[0] = createColumn(0);
    //この関数(function createColumn(col))を使って、 5 列分の配列を作っていけばいいので、いったん colums という配列を宣言してあげて、 columns の 0 番目、つまり B の列を createColumn(0) で作ってあげましょう。
    // columns[1] = createColumn(1);
    // columns[2] = createColumn(2);
    // columns[3] = createColumn(3);
    // columns[4] = createColumn(4);
    //真ん中は FREE にしたいのでcolumnsの2番目の要素の2つ目の要素をFREEと直接書き換えてあげましょう。
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  //row = 行
  //column = 列


  
function renderBingo(column) {
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 5; col++) {
      const td = document.createElement('td');
      td.textContent = columns[col][row];
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }
}

const columns = createColumns();

renderBingo(columns);
}