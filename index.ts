
enum AnimationConfig{
  TILE_SIZE = 30,
  FPS = 30,
  SLEEP = 1000 / FPS,
  TPS = 2,
  DELAY = FPS / TPS
}



enum RawTile {
  AIR,
  UNBREAKABLE,
  STONE,
  BOMB,
  BOMB_CLOSE,
  BOMB_REALLY_CLOSE,
  TMP_FIRE,
  FIRE,
  EXTRA_BOMB,
  MONSTER_UP,
  MONSTER_RIGHT,
  TMP_MONSTER_RIGHT,
  MONSTER_DOWN,
  TMP_MONSTER_DOWN,
  MONSTER_LEFT,
}

interface Tile {
  isAir(): boolean,
  isUnbreakable(): boolean,
  isStone(): boolean,
  isBomb(): boolean,
  isBombClose(): boolean,
  isBombReallyClose(): boolean,
  isTmpFire(): boolean,
  isFire():boolean,
  isExtraBomb(): boolean,
  isMonsterUp(): boolean,
  isMonsterDown(): boolean,
  isMonsterRight(): boolean,
  isMonsterLeft(): boolean,
  isTmpMonsterRight(): boolean,
  isTmpMonsterDown(): boolean,

  isGameOver(): boolean,
  draw(y: number, x: number, g: CanvasRenderingContext2D): void;
  renewTile(y: number, x: number): void;
  setUpMonsterUp(y: number, x: number): void;
  setUpMonsterDown(y: number, x: number): void;
  setUpMonsterLeft(y: number, x: number): void;
  setUpMonsterRight(y: number, x: number): void;
  explode(x: number, y: number, type: Tile): void;
  isBombType(): boolean;
  move(x: number, y: number): void;
}

class Air implements Tile{
  isAir(): boolean {
    return true;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
  }

  renewTile(y: number, x: number) {
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new Air();
    map[y - 1][x] = new MonsterUp();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new Air();
    map[y + 1][x] = new TmpMonsterDown();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new Air();
    map[y][x - 1] = new MonsterLeft();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new Air();
    map[y][x + 1] = new TmpMonsterRight();
  }

  explode(x: number, y: number, type: Tile){
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
    playerx += x;
    playery += y;
  }

}

class Bomb implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return true;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#770000";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
    map[y][x] = new BombClose();
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return true;
  }

  move(x: number, y: number) {
  }
}

class BombClose implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return true;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#cc0000";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
    map[y][x] = new BombReallyClose();
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return true;
  }

  move(x: number, y: number) {
  }
}

class BombReallyClose implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return true;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#ff0000";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
    map[y - 1][x + 0].explode(x + 0, y - 1, new Fire());
    map[y + 1][x + 0].explode(x + 0, y + 1, new TmpFire());
    map[y + 0][x - 1].explode(x - 1, y + 0, new Fire());
    map[y + 0][x + 1].explode(x + 1, y + 0, new TmpFire());
    map[y][x] = new Fire();
    bombs++;
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return true;
  }

  move(x: number, y: number) {
  }

}

class ExtraBomb implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return true;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#00cc00";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
    playerx += x;
    playery += y;
    bombs++;
    map[playery][playerx] = new Air();
  }

}

class MonsterDown implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return true;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return true;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#cc00cc";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
    map[y + 1][x].setUpMonsterDown(y, x);
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }

}

class MonsterLeft implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return true;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return true;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#cc00cc";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
    map[y][x - 1].setUpMonsterLeft(y, x);
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }

}

class MonsterRight implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return true;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return true;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#cc00cc";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
    map[y][x + 1].setUpMonsterRight(y, x);
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }

}

class MonsterUp implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return true;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return true;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#cc00cc";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
    map[y - 1][x].setUpMonsterUp(y, x);
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }

}

class Stone implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return true;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#0000cc";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    if (Math.random() < 0.1)
      map[y][x] = new ExtraBomb();
    else
      map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }

}

class TmpFire implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return true;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
  }

  renewTile(y: number, x: number) {
    map[y][x] = new Fire();
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }
}

class Fire implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return true;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return true;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#ffcc00";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
    map[y][x] = new Air();
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
    playerx += x;
    playery += y;
  }
}

class TmpMonsterDown implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return true;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
  }

  renewTile(y: number, x: number) {
    map[y][x] = new MonsterDown();
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }
}

class TmpMonsterRight implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return true;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
  }

  renewTile(y: number, x: number) {
    map[y][x] = new MonsterRight();
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
    addBomb(y, x);
    map[y][x] = type;
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }
}

class Unbreakable implements Tile{
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return true;
  }

  isGameOver(): boolean {
    return false;
  }

  draw(y: number, x: number, g: CanvasRenderingContext2D) {
    g.fillStyle = "#999999";
    g.fillRect(x * AnimationConfig.TILE_SIZE, y * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
  }

  renewTile(y: number, x: number) {
  }

  setUpMonsterUp(y: number, x: number){
    map[y][x] = new MonsterRight();
  }

  setUpMonsterDown(y: number, x: number){
    map[y][x] = new MonsterLeft();
  }

  setUpMonsterLeft(y: number, x: number){
    map[y][x] = new MonsterUp();
  }

  setUpMonsterRight(y: number, x: number){
    map[y][x] = new MonsterDown();
  }

  explode(x: number, y: number, type: Tile) {
  }

  isBombType(){
    return false;
  }

  move(x: number, y: number) {
  }

}

interface Input {
  handleInput(): void;
}

class Up implements Input{
  handleInput() {
    move(0, -1);
  }
}
class Down implements Input{
  handleInput() {
    move(0, 1);
  }
}
class Left implements Input{
  handleInput() {
    move(-1, 0);
  }
}
class Right implements Input{
  handleInput() {
    move(1, 0);
  }
}
class Place implements Input{
  handleInput() {
    placeBomb();
  }
}

let playerx = 1;
let playery = 1;
let rawMap: RawTile[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 2, 2, 2, 2, 2, 1],
  [1, 0, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 2, 2, 2, 0, 0, 0, 1],
  [1, 2, 1, 2, 1, 0, 1, 0, 1],
  [1, 2, 2, 2, 2, 0, 0, 10, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let map: Tile[][];

function assertExhausted(x: never): never{
  throw new Error("Unexpected object: x" + x)
}

function transFormTile(tile: RawTile){
  switch (tile){
    case RawTile.AIR: return new Air();
    case RawTile.UNBREAKABLE: return new Unbreakable();
    case RawTile.STONE: return new Stone();
    case RawTile.BOMB: return new Bomb();
    case RawTile.BOMB_CLOSE: return new BombClose();
    case RawTile.BOMB_REALLY_CLOSE: return new BombReallyClose();
    case RawTile.TMP_FIRE: return new TmpFire();
    case RawTile.FIRE: return new Fire();
    case RawTile.EXTRA_BOMB: return new ExtraBomb();
    case RawTile.MONSTER_UP: return new MonsterUp();
    case RawTile.MONSTER_RIGHT: return new MonsterRight();
    case RawTile.TMP_MONSTER_RIGHT: return new MonsterRight();
    case RawTile.MONSTER_DOWN: return new MonsterDown();
    case RawTile.TMP_MONSTER_DOWN: return new MonsterDown();
    case RawTile.MONSTER_LEFT: return new MonsterLeft();
    default: assertExhausted(tile);
  }
}

function transformMap() {
  map = new Array(rawMap.length);
  for(let y = 0; y < rawMap.length; y++){
    map[y] = new Array(rawMap[y].length);
    for(let x = 0; x < rawMap[y].length; x++){
      map[y][x] = transFormTile(rawMap[y][x]);
    }
  }
}

let inputs: Input[] = [];

let delay = 0;
let bombs = 1;
let gameOver = false;

function addBomb(y: number, x: number) {
  if (map[y][x].isBombType())
    bombs++;
}

function move(x: number, y: number) {
  map[playery + y][playerx + x].move(x, y);
}

function placeBomb() {
  if (bombs > 0) {
    map[playery][playerx] = new Bomb();
    bombs--;
  }
}

function handleInput() {
  while (!gameOver && inputs.length > 0) {
    let current = inputs.pop();
    current.handleInput()
  }
}

function failCondition() {
  if (map[playery][playerx].isGameOver())
    gameOver = true;
}

function renewMap() {
  for (let y = 1; y < map.length; y++) {
    for (let x = 1; x < map[y].length; x++) {
        map[y][x].renewTile(y, x);
    }
  }
}

function update() {
  //키 입력 시 행위
  handleInput();
  //실패 조건인지 탐색
  failCondition();

  if (--delay > 0) return;
  delay = AnimationConfig.DELAY;

  renewMap();
}

function drawMap(g: CanvasRenderingContext2D) {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        map[y][x].draw(y, x, g);
      }
    }
}

function drawPlayer(g: CanvasRenderingContext2D) {
  g.fillStyle = "#00ff00";
  if (!gameOver)
    g.fillRect(playerx * AnimationConfig.TILE_SIZE, playery * AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE, AnimationConfig.TILE_SIZE);
}

function initGame() {
  let canvas = <HTMLCanvasElement>document.getElementById("GameCanvas");
  let g = canvas.getContext("2d");
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function draw() {
  let g = initGame();
  drawMap(g);
  drawPlayer(g);
}

function setSleepTime(after: number, before: number) {
  let frameTime = after - before;
  let sleep = AnimationConfig.SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  setSleepTime(after, before);
}

window.onload = () => {
  transformMap();
  gameLoop();
};

enum Key {
  LEFT_KEY = "ArrowLeft",
  UP_KEY = "ArrowUp",
  RIGHT_KEY = "ArrowRight",
  DOWN_KEY = "ArrowDown"
}

window.addEventListener("keydown", (e) => {
  if (e.key === Key.LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === Key.UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === Key.RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === Key.DOWN_KEY || e.key === "s") inputs.push(new Down());
  else if (e.key === " ") inputs.push(new Place());
});
