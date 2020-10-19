import { v4 as uuidv4 } from 'uuid';
import { Subject } from 'rxjs';
import { NativeCrypto } from '@questnetwork/quest-crypto-js';

export class QuestGames {

  constructor() {
    this.key = {}

  }

  async start(config){

    this.version = config['version'];
    this.jsonSwarm = config['ipfs']['swarm'];
    this.electron = config['dependencies']['electronService'];
    this.bee = config['dependencies']['bee'];
    this.dolphin = config['dependencies']['dolphin'];
    this.crypto = new NativeCrypto();
    this.request = config['dependencies']['request'];
    // await this.algo.start(config);

    return true;
  }



}
