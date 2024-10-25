const GAME_WIDTH = 160;
const GAME_HEIGHT = 160;
const GAME_TILE_SIZE = 32;
const IMAGE_TILE_SIZE = 32;
const ROWS = GAME_HEIGHT / GAME_TILE_SIZE;
const COLUMNS = GAME_WIDTH / GAME_TILE_SIZE;

const LEVEL1 = [
    9, 9, 9, 9, 9,
    1, 2, 2, 2, 3,
    6, 7, 7, 7, 8,
    6, 7, 7, 7, 8,
    11, 12, 12, 12, 13
];

const LEVEL2 = [
    14, 6, 25, 25, 20,
    15, 11, 17, 23, 25,
    2, 3, 11, 12, 12,
    19, 21, 2, 3, 15,
    24, 19, 19, 8, 14
];

const LEVEL3 = [
    23, 18, 23, 18, 23,
    7, 7, 7, 7, 18,
    20, 19, 7, 19, 20,
    25, 24, 7, 24, 25,
    18, 23, 7, 23, 23
];

const getTile = (array, row, column) =>
{
    return array[COLUMNS * row + column];
};

const drawGrid = (context) =>
{
    let image = new Image();
    image.src = "img/simple.png";

    const IMAGE_COLUMNS = image.width / IMAGE_TILE_SIZE;

    for (let row = 0; row < ROWS; row++)
    {
        for (let column = 0; column < COLUMNS; column++)
        {
            let tile = getTile(LEVEL1, row, column);

            context.drawImage(image,
                ((tile - 1) * IMAGE_TILE_SIZE) % image.width,
                Math.floor((tile - 1) / IMAGE_COLUMNS) * IMAGE_TILE_SIZE,
                IMAGE_TILE_SIZE,
                IMAGE_TILE_SIZE,
                column * GAME_TILE_SIZE,
                row * GAME_TILE_SIZE,
                GAME_TILE_SIZE,
                GAME_TILE_SIZE);

            context.strokeRect(column * GAME_TILE_SIZE, row * GAME_TILE_SIZE, GAME_TILE_SIZE, GAME_TILE_SIZE);
        }
    }
};

export {
    GAME_HEIGHT,
    GAME_WIDTH,
    GAME_TILE_SIZE,
    IMAGE_TILE_SIZE,
    ROWS,
    COLUMNS,
    getTile,
    LEVEL1,
    LEVEL2,
    LEVEL3
}