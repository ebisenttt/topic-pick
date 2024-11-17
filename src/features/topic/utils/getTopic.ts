const TOPICS = [
  'ゲーム',
  'アニメ',
  'スポーツ',
  '映画',
  '音楽',
  'TECH',
]

export const getTopic = () => {
  const randomIndex = Math.floor(Math.random() * TOPICS.length)
  const topic =  TOPICS[randomIndex]

  if (typeof topic === 'undefined') {
    throw new Error('Topic not found')
  }
  return topic
}