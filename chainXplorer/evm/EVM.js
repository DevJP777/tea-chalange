class EVM {
  constructor(config) {
    this.network = config.network || 'mainnet';
    // Logika untuk inisialisasi class Account
  }
  
  // Metode dan properti lainnya untuk class Account

  checkEther() {
    console.log('Your ether test output',this.network);
  }
}

module.exports = EVM;
