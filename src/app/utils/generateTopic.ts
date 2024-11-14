const TOPICS = [
  'ゲーム',
  'アニメ',
  '映画',
  '音楽',
  'スポーツ',
  '漫画',
  'TECH'
]

export const generateTopic = () => {
  const randomIndex = Math.floor(Math.random() * TOPICS.length)
  return TOPICS[randomIndex]
}