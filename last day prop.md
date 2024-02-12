<%*
const findLastDayString = (lastNumber = 0) => {
	const dayString = `journals/days/${tp.date.now("YYYY-MM-DD ddd", -lastNumber)}`

	if (tp.file.exists(dayString)) return dayString
	else if (lastNumber > 50) return 0
	else return findLastNote(lastNumber + 1)
}

const findTfile = (fileString) => tp.file.find_tfile(fileString)

const findLastDayTFile = () => {
	const lastDayString = findLastDayString()
	
	return tp.file.find_tfile(lastDayString)
}

const getPropFromTFile = async (tFile, prop) => {
	const re = new RegExp(`${prop}: (?<value>.+)`)
	const file = await tp.file.include(tFile)

	if (file) {
		const prop = re.exec(file)
		console.warn('prop', prop)
		if (prop?.groups && 'value' in prop.groups) {
			return prop.groups.value
		}
	}
	return ''
}

const getPropFromLastDay = async (prop) => await getPropFromTFile(findLastDayTFile(), prop)

const wokeUpAt = await getPropFromLastDay('woke-up-at')
_%>
<%"---"%>
woke-up-at: <% wokeUpAt %>
<%"---"%>