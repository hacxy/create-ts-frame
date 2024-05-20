import React from 'react';
import {Box, Text, useApp, useInput} from 'ink';

export default function App() {
	const {exit} = useApp();

	useInput(input => {
		if (input === 'q') {
			exit();
		}
	});

	return (
		<Box flexDirection="column" alignItems="center" justifyContent="center">
			<Text>Hello World!</Text>
			<Text>Press 'q' to exit.</Text>
		</Box>
	);
}
