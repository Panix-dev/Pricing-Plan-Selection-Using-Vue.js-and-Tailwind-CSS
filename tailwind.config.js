module.exports = {
  theme: {
    extend: {
	  	width: {
			'custom': '56rem',
		},
		colors: {
			'blue-alternate': '#366A8F'
		},
		shadows: {
			'outline-green': '0 0 0 3px rgba(5,202,160, 0.8)',
		}
    }
  },
  variants: {
  	cursor: ['responsive', 'hover'],
  	backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd']
  },
  plugins: [],
}
