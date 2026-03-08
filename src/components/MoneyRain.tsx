'use client';

import React, { useEffect, useState } from 'react';
import styles from '../app/MoneyRain.module.css';
import Image from 'next/image';

const MoneyRain = () => {
  const [bills, setBills] = useState<{ id: number; left: string; duration: string; delay: string; size: number; rotation: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBill = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 5 + 5}s`, // Cai entre 5 e 10 segundos
        delay: `${Math.random() * 2}s`,
        size: Math.floor(Math.random() * 60) + 40, // Tamanho entre 40px e 100px
        rotation: `${Math.random() * 360}deg`,
      };

      setBills((prev) => [...prev.slice(-15), newBill]); // Limite de 15 notas para performance
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.fullPageContainer}>
      {bills.map((bill) => (
        <div
          key={bill.id}
          className={styles.bill}
          style={{
            left: bill.left,
            animationDuration: bill.duration,
            animationDelay: bill.delay,
            width: `${bill.size}px`,
            height: 'auto',
          }}
        >
          <img 
            src="/dinheiro.png" // Certifique-se de salvar a imagem na pasta /public
            alt="Nota de dinheiro"
            style={{ transform: `rotate(${bill.rotation})`, width: '100%' }}
          />
        </div>
      ))}
    </div>
  );
};

export default MoneyRain;