'use client';
import { useState } from 'react';
import Image from 'next/image';
import './styles/home.css'

export default function Home() {
  const contents = [
    {
      title: 'Bums Lottery Daily Combo 21 October 2024',
      text: 'Get 15000 stars with Starsfi Daily Combo 21 October 2024',
      updated: '21. Oct 2024 - by Adeoye O. on Daily Combo',
      image: '/images/news.png',
    },
    {
      title: 'Hamster Kombat Mini Game Puzzle Solution',
      text: 'Earn 250BP BLUM points reward by finishing the daily video tasks of 21 October 2024.',
      updated: '21. Oct 2024 - by Adeoye O. on Daily Combo',
      image: '/images/news.png',
    },
    {
      title: 'Tapswap Daily Task Cinema Codes 21 October 2024',
      text: 'Claim 150 HRUM reward by Solving the Quote of the Day of 21 October 2024.',
      updated: '21. Oct 2024 - by Adeoye O. on Daily Combo',
      image: '/images/news.png',
    },
  ];
  const itemsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(contents.length / itemsPerPage);
  const currentContents = contents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mt-4 groupContent">
      <div className="row">
        {currentContents.map((content, index) => (
          <div className="col-md-12 mb-3" key={index}>
            <div className="card cotentTitle">
              <div className="row g-0 contentCoin">
                <div className="col-md-5">
                  <Image
                    src={content.image}
                    width={340}
                    height={200}
                    alt={content.title}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">{content.title}</h5>
                    <p className="card-text contentBoder">
                      <small className="text-muted">{content.updated}</small>
                    </p>
                    <p className="card-text">{content.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? 'active' : ''}
              >
                {page}
              </button>
            )
          )}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <div className="recent-daily-combo mt-5 listContent">
        <h2 className="text-center">Recent Daily Combo</h2>
        <ul>
          <li>CEX Daily Combo 21 October 2024</li>
          <li>Cat Gold Miner Daily Treasure Combo 21 October 2024</li>
          <li>Captain Tsubasa Daily Combo 21 October 2024</li>
          <li>HashCats Daily Combo & Cipher Staking 21 October 2024</li>
          <li>Grand Combat Daily Combo 21 October 2024</li>
          <li>City Holder Daily Combo 21 October 2024</li>
          <li>Spell Wallet Daily Puzzle Combo 21 October 2024</li>
        </ul>
      </div>
    </div>
  );
}
