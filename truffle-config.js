module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Development network connected to Ganache
      port: 7545, //port that Ganache is running on
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}