'use client'

import { useState } from 'react'
import { generateTopic } from '../utils/generateTopic'
import { Button } from './Button'

export const TopicCard = () => {
	const [topic, setTopic] = useState<string | null>(null)

	const handleClick = () => {
		const topic = generateTopic()
		setTopic(topic)
	}

	return (
		<div>
			<p>{topic ?? 'ボタンを押して話題を生成'}</p>
			<Button handleClick={handleClick}>Click me</Button>
		</div>
	)
}
