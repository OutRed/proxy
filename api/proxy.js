const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) {
    res.status(400).send('Please provide a URL to proxy');
  }
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
};
