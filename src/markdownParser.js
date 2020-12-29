
// tests

// hashes from 1 - 6
const h1 = /^# (.*$)/gim
const h2 = /^## (.*$)/gim
const h3 = /^### (.*$)/gim
const h4 = /^#### (.*$)/gim
const h5 = /^##### (.*$)/gim
const h6 = /^###### (.*$)/gim

// italic, bold, underline, stroke
const italic = /\*(.*)\*/gim
const bold = /\*\*(.*)\*\*/gim
const underline = /__(.*)__/gim
const stroke = /~~(.*)~~/gim

// special stuff
const link = /\[(.*?)\]\((.*?)\)/gim
const lineBreak = /\n$/gim


export function parse(text) {
	const result = text
		.replace(h1, "<h1>$1</h1>")
		.replace(h2, "<h2>$1</h2>")
		.replace(h3, "<h3>$1</h3>")
		.replace(h4, "<h4>$1</h4>")
		.replace(h5, "<h5>$5</h5>")
		.replace(h6, "<h6>$1</h6>")
		.replace(bold, "<b>$1</b>")
		.replace(italic, "<i>$1</i>")
		.replace(underline, "<u>$1</u>")
		.replace(stroke, "<del>$1</del>")
		.replace(link, "<a href='$2'>$1</a>")
		.replace(lineBreak, "<br />")

	return result
}
