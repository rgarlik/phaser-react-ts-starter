import Phaser from "phaser";
import MenuScene from "./scenes/FirstScene";

/**
 * Phaser game instance implemented as a singleton.
 * Access the `Instance` static property to get the current game instance.
 */
export default class Game extends Phaser.Game {
    // Singleton game instance getter
    static get Instance(): Phaser.Game {
        if(this._instance) {
            return this._instance;
        } else {
            return new this();
        }
    }

    // Private singleton instance
    private static _instance: Phaser.Game;

    // GameConfig for the Phaser game
    private static readonly _config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        parent: 'game-root',
        backgroundColor: '#33A5E7',
        scale: {
            width: 1000,
            height: 600,
            mode: Phaser.Scale.ScaleModes.HEIGHT_CONTROLS_WIDTH,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: [ MenuScene ]
    };

    constructor() {
        super(Game._config);
        Game._instance = this;
    }
}