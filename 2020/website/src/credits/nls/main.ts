export default {
	locales: {
		de: () => import('./de/main'),
		fr: () => import('./fr/main')
	},
	messages: {
		headline: 'Licensing',
		deadline: `CC`,

		textHead: `Creative Commons`,
		description: `
By default APConf media will be released under a CC BY license.
<br><br>
*Keynotes, talks and presentations*<br>
The content of the presentations belongs to the presenters and therefore each talk will be released as either
[CC0](https://creativecommons.org/publicdomain/zero/1.0/deed), [CC BY](https://creativecommons.org/licenses/by/4.0/)
or [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) per their wishes.<br>
	`,
		overview: `[Creative Commons Attribution 4.0 International Public License](https://github.com/ContributorCovenant/contributor_covenant/blob/release/LICENSE.md)<br>
The [sourcecode](http://github.com/sebilasse/activitypub-origami) of the page is released as `,
		imgCredit: `Sebastian`
	}
};
