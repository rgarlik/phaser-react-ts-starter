/**
 * First scene of the game
 */
export default class FirstScene extends Phaser.Scene {
    // Scene constructor
    constructor() {
      super('GameScene');
    }
  
    // Scene preload
    preload() {
      this.load.image('logo', 'phaser3-logo.png');
    }

    // The logo animation tween
    private _tween? : Phaser.Tweens.Tween;

    // The logo image
    private _logo? : Phaser.GameObjects.Image;
  
    // Scene creation
    create() {
      const canvas = this.sys.canvas;
      this._logo = this.add.image(canvas.width / 2, canvas.height / 2, 'logo');
  
      this._tween = this.tweens.add({
        targets: this._logo,
        y: 350,
        duration: 1500,
        ease: 'Sine.inOut',
        yoyo: true,
        repeat: -1
      });

      // Add a listener for a custom event fired by a button in the React overlay
      this.events.addListener('play-pause-logo', () => { this._handlePlayPause() });
      this.events.addListener('resize-logo', (newSize: number) => { this._handleResize(newSize) });
    }

    // Play/pause button event handler
    private _handlePlayPause(): void {
      if(this._tween) {
        if(this._tween.isPlaying()) {
          this._tween.pause();
        } else {
          this._tween.resume();
        }
      }
    }

    // Resize slider event handler
    private _handleResize(newSize: number): void {
      if(this._logo) {
        this._logo.scale = newSize / 100;
      }
    }
} 