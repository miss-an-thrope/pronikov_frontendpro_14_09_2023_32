import React from 'react';
import '../assets/scss/components/App.scss';
import Header from './blocks/Header';
import Aside from './blocks/Aside';
import Main from './blocks/Main';
import Footer from './blocks/Footer';

class App extends React.Component {

  constructor () {
    super();
  }

  render() {

    const headers = [
      'Book',
      'Author',
      'Language',
      'Published',
      'Sales'
    ];
    
    const data = [
      [
      'A Tale of Two Cities', 'Charles Dickens',
      'English', '1859', '200 million',
      ],
    
      [
      'Le Petit Prince (The Little Prince)',
      'Antoine de Saint-Exupéry', 'French', '1943', '150 million',
      ],
    
      [
      "Harry Potter and the Philosopher's Stone", 'J. K. Rowling',
      'English', '1997', '120 million',
      ],
    
      [
      'And Then There Were None', 'Agatha Christie',
      'English', '1939', '100 million',
      ],
    
      [
      'Dream of the Red Chamber', 'Cao Xueqin',
      'Chinese', '1791', '100 million',
      ],
    
      [
      'The Hobbit', 'J. R. R. Tolkien',
      'English', '1937', '100 million',
      ],
    ];

    return (
      <>
          <div className='container'>
            <Header></Header>
            <Aside></Aside>
            <Main headers={headers} initialData={data}></Main>  
            <Footer></Footer>
          </div>
        </>
    )
  }
  
}

export default App
