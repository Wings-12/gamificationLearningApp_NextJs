import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const [emotion, setEmotion] = useState(3);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [adventureLog, setAdventureLog] = useState('');
  const [task, setTask] = useState('');

  const keywords = [
    '集中力MAX', '疲労困憊', 'やる気満々', 'モチベ低下', 'ストレスMAX', '超リラックス'
  ];

  const handleEmotionChange = (value: number[]) => {
    setEmotion(value[0]);
  };

  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords(prev =>
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  const handleSubmit = () => {
    // Here you would typically save the data or perform some action
    console.log({ emotion, selectedKeywords, adventureLog, task });
    router.push('/adventure');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ゲーミフィケーション学習最適化アプリ</title>
        <meta name="description" content="ゲーミフィケーション学習最適化アプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ゲーミフィケーション学習最適化アプリ</h1>

        <section className={styles.section}>
          <h2>感情メーター</h2>
          <Slider
            min={1}
            max={5}
            step={1}
            value={[emotion]}
            onValueChange={handleEmotionChange}
            className={styles.emotionMeter}
          />
          <div className={styles.emotionValue}>{emotion}</div>
        </section>

        <section className={styles.section}>
          <h2>ムードタグ</h2>
          <div className={styles.keywordSelection}>
            {keywords.map(keyword => (
              <span
                key={keyword}
                className={`${styles.keyword} ${selectedKeywords.includes(keyword) ? styles.selected : ''}`}
                onClick={() => toggleKeyword(keyword)}
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>今日の冒険日誌（オプション）</h2>
          <textarea
            className={styles.textarea}
            value={adventureLog}
            onChange={(e) => setAdventureLog(e.target.value)}
            placeholder="今日の学習冒険について詳しく書いてください..."
          />
        </section>

        <section className={styles.section}>
          <h2>タスク入力</h2>
          <input
            type="text"
            className={styles.input}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="取り組みたいタスクを入力してください（例：音読）"
          />
        </section>

        <Button onClick={handleSubmit} className={`${styles.submitButton} ${styles.pulse}`}>
          冒険を始める！
        </Button>
      </main>
    </div>
  );
}