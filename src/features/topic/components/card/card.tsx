import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { getTopic } from '../../utils/getTopic'
import { useState } from 'react'

export const TopicCard = () => {
	const [topic, setTopic] = useState<string | null>(null)

	const handlePick = () => {
		const newTopic = getTopic()
		setTopic(newTopic)
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Topic</CardTitle>
			</CardHeader>
			<CardContent>
				{topic && <p>{topic}</p>}
				<Button onClick={handlePick}>PICK!</Button>
			</CardContent>
		</Card>
	)
}
