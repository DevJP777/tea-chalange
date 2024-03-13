const evm = require("./evm/EVM");

class ChainXplorer {
    constructor(config) {
      this.config = config;
      this.evm = new evm(config);
      
      // Tambahkan class lain yang Anda perlukan di sini
    }
  }
  

  
  module.exports = ChainXplorer;
  