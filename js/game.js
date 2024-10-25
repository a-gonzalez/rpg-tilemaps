import { LEVEL1, LEVEL2, LEVEL3, getTile, ROWS, COLUMNS, GAME_HEIGHT, GAME_WIDTH, IMAGE_TILE_SIZE, GAME_TILE_SIZE } from "./util.js";

export default class Game
{
    constructor(screen)
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(screen);
    }

    render(delta_time)
    {
        this.context.clearRect(0, 0, this.screen.width, this.screen.height);

        //this.context.drawImage(this.background, 0, 0);
        /*this.context.drawImage(this.background,
            0 * IMAGE_TILE_SIZE,
            0 * IMAGE_TILE_SIZE,
            IMAGE_TILE_SIZE,
            IMAGE_TILE_SIZE,
            0 * GAME_TILE_SIZE,
            0 * GAME_TILE_SIZE,
            GAME_TILE_SIZE,
            GAME_TILE_SIZE);*/

        this.drawLevel();
    }

    drawGrid(context)
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

                if (this.debug === true)
                {
                    context.strokeRect(column * GAME_TILE_SIZE, row * GAME_TILE_SIZE, GAME_TILE_SIZE, GAME_TILE_SIZE);
                }
            }
        }
    }

    drawLevel()
    {
        let image = new Image();
        image.src = "img/simple.png";

        const IMAGE_COLUMNS = image.width / IMAGE_TILE_SIZE;

        for (let row = 0; row < ROWS; row++)
        {
            for (let column = 0; column < COLUMNS; column++)
            {
                let tile = getTile(this.level, row, column);

                this.context.drawImage(image,
                    ((tile - 1) * IMAGE_TILE_SIZE) % image.width,
                    Math.floor((tile - 1) / IMAGE_COLUMNS) * IMAGE_TILE_SIZE,
                    IMAGE_TILE_SIZE,
                    IMAGE_TILE_SIZE,
                    column * GAME_TILE_SIZE,
                    row * GAME_TILE_SIZE,
                    GAME_TILE_SIZE,
                    GAME_TILE_SIZE);

                if (this.debug === true)
                {
                    this.context.strokeRect(column * GAME_TILE_SIZE, row * GAME_TILE_SIZE, GAME_TILE_SIZE, GAME_TILE_SIZE);
                }
            }
        }
    }

    initialize(screen)
    {
        screen.width = GAME_WIDTH;
        screen.height = GAME_HEIGHT;

        /*let image = new Image();
        image.src = "img/simple.png";*/

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.context.imageSmoothingEnabled = false;
        //this.background = image;
        this.game_over = false;
        this.debug = false;
        this.level = LEVEL1;

        let debug_button = document.getElementById("debug");
        debug_button.addEventListener("click", (event) =>
        {
            this.toggleDebug();
        });

        let unus_button = document.getElementById("unus");
        unus_button.addEventListener("click", (event) =>
        {
            this.level = LEVEL1;
        });

        let duo_button = document.getElementById("duo");
        duo_button.addEventListener("click", (event) =>
        {
            this.level = LEVEL2;
        });

        let tres_button = document.getElementById("tres");
        tres_button.addEventListener("click", (event) =>
        {
            this.level = LEVEL3;
        });
    }

    toggleDebug()
    {
        this.debug = !this.debug;
    }
}