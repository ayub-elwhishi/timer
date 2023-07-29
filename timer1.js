const times = process.argv.slice(2)
for (const i of times) {
	if (i >= 0 && !isNaN(i)) {
		setTimeout(() => {process.stdout.write('\x07')}, i * 1000)
	}
}
