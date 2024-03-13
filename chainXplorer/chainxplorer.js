// ChainXplorer.js

class ChainXplorer {
    constructor(config) {
      this.config = config;
      this.account = new Account(config);
      this.transactions = new Transactions(config);
      this.tokens = new Tokens(config);
      // Tambahkan class lain yang Anda perlukan di sini
    }
  }
  
  class Account {
    constructor(config) {
      this.network = config.network || 'mainnet';
      // Logika untuk inisialisasi class Account
    }
  
    // Metode dan properti lainnya untuk class Account
  }
  
  class Transactions {
    constructor(config) {
      this.network = config.network || 'mainnet';
      // Logika untuk inisialisasi class Transactions
    }
  
    // Metode dan properti lainnya untuk class Transactions
  }
  
  class Tokens {
    constructor(config) {
      this.network = config.network || 'mainnet';
      // Logika untuk inisialisasi class Tokens
    }
  
    // Metode dan properti lainnya untuk class Tokens
  }
  
  module.exports = ChainXplorer;
  