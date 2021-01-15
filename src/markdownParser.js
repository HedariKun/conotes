// tests

// hashes from 1 - 6
const h1 = /^# (.*$)/gim
const h2 = /^## (.*$)/gim
const h3 = /^### (.*$)/gim
const h4 = /^#### (.*$)/gim
const h5 = /^##### (.*$)/gim
const h6 = /^###### (.*$)/gim

// italic, bold, underline, stroke
const italic = /\*(.*?)\*/gim
const bold = /\*\*(.*?)\*\*/gim
const underline = /__(.*?)__/gim
const stroke = /~~(.*?)~~/gim
const tag = /`(.*?)`/gim

// special stuff
const link = /\[(.*?)\]\((.*?)\)/gim
const lineBreak = /\n$/gim

function applyMarkdown(text) {
 return text.replace(bold, "<b>$1</b>")
		.replace(italic, "<i>$1</i>")
		.replace(underline, "<u>$1</u>")
		.replace(stroke, "<del>$1</del>")
		.replace(link, "<a href='$2'>$1</a>")
		.replace(lineBreak, "<br />")
		.replace(tag, "<span class='tag'>$1</span>")
}

export function parse(text) {
	const lines = text.split("\n")
	console.log(lines)
	let data = ""
	let aindex = 0
	
	while(aindex < lines.length) {
		const {index , html} = parseLine(aindex, lines, data)
		console.log(html)
		aindex = index
		data = html
	}
	return data
}

function parseLine(index, lines, html) {
	/** @type {string} */
	const element = applyMarkdown(lines[index])
	
	if(element == "") {
		html += "<br/>"
	} else if(element.startsWith("#")) {
		html += element.replace(h1, "<h1>$1</h1>")
		.replace(h2, "<h2>$1</h2>")
		.replace(h3, "<h3>$1</h3>")
		.replace(h4, "<h4>$1</h4>")
		.replace(h5, "<h5>$5</h5>")
		.replace(h6, "<h6>$1</h6>")
	} else if(element.indexOf("|") != -1) {
		if(index + 1 < lines.length) {
			if(lines[index + 1].indexOf("-") != -1) {
				const headers = element.split("|")
				index += 2
				html += "<table> <tr>"
				for(const header of headers) {
					html += `<th>${header}</th>`
				}
				html += "</tr>"
				while(lines[index].indexOf("|") != -1) {
					const body = lines[index].split("|")
					html += "<tr>"
					for(const b of body) {
						html += `<td>${applyMarkdown(b)}</td>`
					}
					html += "</tr>"
					if(index + 1 < lines.length) {
						index ++
					} else {
						break
					}
				}
				html += "</table>"
			}
		}
	}else if(element.startsWith("*")) {
		html += "<ul>"
		html += `<li>${element.replace("*", "")}</li>`
		if(index + 1 < lines.length) {
			index++
			while(lines[index].startsWith("*") || lines[index].startsWith(" ")) {
				const value = lines[index]
				if(value.startsWith("*")) {
					html += `<li>${applyMarkdown(value.replace("*", ""))}</li>`
				} else {
					html = html.slice(0, -5)
					html += `<p>${applyMarkdown(value)}</p></li>`
				}
				if(index + 1 < lines.length) {
					index++
				} else {
					console.log("happens", index)
					break;
				}
			}
		}
		html += "</ul>"
	} else {
		html += `<p> ${element} </p>`
	}
	index++
	return { index, html}
}
