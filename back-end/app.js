const { Board, Led  } = require("johnny-five");


const board = new Board();

board.on("ready", () => {
  const led = new Led(13);
  const led2 = new Led(11);
  const led3 = new Led(10);
  const led4 = new Led(9);

  board.repl.inject({
    led: led,
    led2: led2,
    led3 : led3,
    led4 : led4
  
  });
});
