const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;
const API_URL = 'http://openlibrary.org/search.json';

app.use(express.static(path.join(__dirname, '../dist')));

app.get(['/search/', '/search/:query/:page'], (req, res) => {
  const query = req.params.query || '';
  const page = req.params.page || 1;
  const result = { books: [], total: null };

  if (query.length < 2) {
    res.json(result);
    return;
  }

  axios.get(`${API_URL}?q=${query}&page=${page}`)
      .then(response => {
        if (!response || !response.data || !response.data.docs || !Array.isArray(response.data.docs)) {
          res.json(result);
          return;
        }
        
        // deduped
        const docs = response.data.docs;
        result.total = response.data.num_found;
        for (let i = 0; i < docs.length; i++) {
          const doc = docs[i];
          const title = doc.title_suggest;
          const author = doc.author_name;

          if (!doc || result.books.includes({ title, author })) {
            continue;
          }

          result.books.push({ title, author });
        }

        res.json(result);
      })
      .catch(e => console.log(e));
})

app.listen(port, () => console.log(`Listening on port ${port}!`));
