/* stylelint-disable selector-pseudo-element-colon-notation */
@font-face {
  font-weight: normal;
  font-style: normal;
  font-display: auto;
	font-family: "<%= fontName %>";
	src: url('<%= cssClass %>.woff2') format('woff2'),
    url('<%= cssClass %>.woff') format('woff'),
    url('<%= cssClass %>.ttf') format('truetype');
}

.<%= fontName %>:before {
	font-family: "<%= fontName %>";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	font-style: normal;
	font-variant: normal;
	font-weight: normal;
	/* speak: none; only necessary if not using the private unicode range (firstGlyph option) */
	text-decoration: none;
	text-transform: none;
}

<% _.each(glyphs, function(glyph) { %>
.<%= fontName %>-<%= glyph.fileName %>:before {
	content: "\<%= glyph.codePoint %>";
}
<% }); %>