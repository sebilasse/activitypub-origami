import { tsx, create } from '@dojo/framework/core/vdom';
import { createICacheMiddleware } from '@dojo/framework/core/middleware/icache';
import i18n from '@dojo/framework/core/middleware/i18n';
import theme from '../middleware/theme';

import Button from '../button';
import Check from '../checkbox';
import Radio from '../radio';
import TextInput from '../text-input';
import TextArea from '../text-area';
import MailInput from '../email-input';
import timezones from '../assets/timezones';

import * as grid from '../AppContent.m.css';
import * as css from './Register.m.css';
import bundle from './Register.nls';
const snarkdown = require('snarkdown').default;
const packageJSON = require('../../package.json');

interface RegisterProperties {
	state?: 'new'|'error'|'sent'|'confirmed';
}
interface RegisterICache {
	validBadgeName: boolean;
	messageBadgeName: string;
	validMail: boolean;
	messageMail: string;
	validTimezone: boolean;
	messageTimezone: string;
	customTZ: string;
	hasTalk?: boolean;
	hasBof?: boolean;
}
const icache = createICacheMiddleware<RegisterICache>();
const factory = create({ icache, theme, i18n }).properties<RegisterProperties>();
const apconf2019_1 = require('../assets/photos/low04_apconf_sl_002_hd.jpg');
const apconf2019_2 = require('../assets/photos/low00_apconf_hellekin_001_hd.jpg');
const apconf2019_3 = require('../assets/photos/low32_apconf_sl029.jpg');
const apconf2019_4 = require('../assets/photos/low70_apconf_sl061_hd.jpg');

/*
TODO : customValidator for the badge name for uniqueness ???

video angel
moderation angel

code of conduct Check
ok recording Check

Talk / BoF CFP
*/

export default factory(function Register({ properties, middleware: { icache, theme, i18n } }) {
	const { get, set } = icache;
	const { messages } = i18n.localize(bundle);
	const themedCss = theme.classes(css);
	const registerHelper = ([themedCss.helperText] as any);

	const timeOptions = {
		...Intl.DateTimeFormat().resolvedOptions(),
		offset: new Date().getTimezoneOffset()
	}
	const timeStyle = (min: number, max: number, display = true) => {
		const _opacity = icache.get('customTZ') || timeOptions.offset < min || timeOptions.offset > max ? 1 : 0;
		return (!display && !_opacity) ? 'display: none;' : `opacity: ${_opacity};`
	}

	const { state = 'new' } = properties();

	if (state === 'sent') {
		return <output classes={[grid.blue, grid.root, themedCss.root, themedCss.sent]}>
			<div classes={grid.headline}><h1>{messages.headline}</h1></div>
			<div classes={grid.headline}><h4>{messages.bylineSent}</h4></div>
			<div />
			<div classes={grid.autoColumn}>
				<p class='serif' innerHTML={snarkdown(messages.mailSent)} />
			</div>
			<div classes={[grid.asideColumn, themedCss.sentAside]} />
		</output>
	}

	return (
		<form
			action={state === 'confirmed' ? '#' : packageJSON.redaktor.server}
			method="POST"
			classes={[grid.blue, grid.root, themedCss.root]}
		>
			<datalist id='timezones'>
				{timezones.map((tz: string) => <option value={tz} />)}
		  </datalist>
			<div classes={grid.headline}>
				<h1>{state === 'confirmed' ? messages.headlineConfirmed : messages.headline}</h1>
			</div>
			<div classes={grid.headline}>
				<h4>{state === 'confirmed' ? messages.bylineConfirmed : messages.byline}</h4>
			</div>
			<aside classes={[grid.leftColumn, themedCss.asideColumn]}>
				<figure classes={themedCss.figure}>
					<img classes={[themedCss.img]} src={apconf2019_1} />
					<img classes={[themedCss.img]} src={apconf2019_2} />
					<img classes={[themedCss.img]} src={apconf2019_3} />
					<img classes={[themedCss.img]} src={apconf2019_4} />
					<figcaption>
						<p>{messages.photocaption}</p>
						Sebastian Lasse, hellekin
					</figcaption>
				</figure>
			</aside>
			{(state === 'confirmed' ?
			<aside classes={[themedCss.stub, themedCss.confirmed]} /> :
			<aside classes={[themedCss.stub]}>
				<div classes={themedCss.top}>
					<span>Admit</span>
					<span classes={themedCss.line}></span>
					<span classes={themedCss.num}>
						Invitation
						<span> 31415926</span>
					</span>
				</div>
				<div classes={themedCss.number}>1</div>
				<div classes={themedCss.invite}>Invite for you<span></span></div>
			</aside>)}

			{(state === 'confirmed' ?
				<div classes={[themedCss.check]}>
					<h1 classes={[themedCss.success]}>{messages.headerConfirmed}</h1>
					<div />
					<h3>{messages.textConfirmed}</h3>
				</div> :
				<div classes={[themedCss.check]}>
					<TextInput
						name='publicBadgeName'
						autocomplete='name'
						maxLength={800}
						responsive={true}
						size='l'
						required={true}
						placeholder={messages.pBadgeName}
						onValidate={(valid, message) => {
							set('validBadgeName', !!valid);
							set('messageBadgeName', message);
						}}
						valid={{ valid: get('validBadgeName'), message: get('messageBadgeName') }}
						classes={registerHelper}
					>
						{messages.iBadgeName}
					</TextInput>
					<MailInput
						name='privateEmail'
						autocomplete='email'
						responsive={true}
						size='l'
						required={true}
						placeholder={messages.pEmail}
						onValidate={(valid, message) => {
							set('validMail', !!valid);
							set('messageMail', message);
						}}
						classes={registerHelper}
					>
						{messages.iEmail}
					</MailInput>

					<TextInput name='publicBadgeByline' maxLength={800} responsive={true}>
						{messages.iBadgeByline}
					</TextInput>
					<TextInput
						name='timezone'
						autocomplete="off"
						list='timezones'
						responsive={true}
						value={icache.get('customTZ') || timeOptions.timeZone}
						onValue={(v) => icache.set('customTZ', v||'')}
						onValidate={(valid, message) => {
							set('validTimezone', !!valid);
							set('messageTimezone', message);
						}}
						valid={{ valid: get('validTimezone'), message: get('messageTimezone') }}
						pattern={timezones.join('|')}
					>{messages.iTimezone}</TextInput>

					<div classes={[themedCss.caption, themedCss.tzCaption]}>
						<span>{messages.tzCaption}</span>
					</div>
					<div style={timeStyle(-420, 360)}>
						<Radio key='_5' name='availableFrom' value='5 a.m.'>5</Radio>
						<Radio key='_6' name='availableFrom' value='6 a.m.' checked={true}>6</Radio>
						<Radio key='_7' name='availableFrom' value='7 a.m.'>7 a.m.</Radio>
					</div>
					<div style={timeStyle(60, 780)}>
						<Radio key='_0' name='availableTo' value='0 a.m.'>0</Radio>
						<Radio key='_1' name='availableTo' value='1 a.m.' checked={true}>1</Radio>
						<Radio key='_2' name='availableTo' value='2 a.m.'>2 a.m.</Radio>
					</div>
					<input classes={themedCss.confirmedTrp} type="text" name='confirmed' />
					<TextInput name='privateName' autocomplete='name' maxLength={400} responsive={true}>
						{messages.iName}
					</TextInput>
					<TextInput name='org' autocomplete='organization' maxLength={800} responsive={true}>
						{messages.iOrg}
					</TextInput>

					<TextInput name='ActivityPub' maxLength={800} responsive={true} placeholder='e.g. @cwebber@octodon.social'>
						{messages.iAP}
					</TextInput>
					<TextInput name='website' maxLength={400} responsive={true}>
						{messages.iWebsite}
					</TextInput>
				</div>
			)}
			<div classes={themedCss.bottom}>
					<div classes={themedCss.widescreen}>
						<p classes={themedCss.description}>
							{messages.registrationMail}<span>: </span>
							<span classes={themedCss.m8l}>
								<span>activitypub </span>
								<span>conf</span>
								<span> @rise </span>
							</span>
							<span>&#117;&#112;&#046;&#110;&#101;&#116;</span>
							<br />
							<span innerHTML={snarkdown(messages.description)}></span>
						</p>
					</div>
					<div classes={themedCss.proposals}>
						<details>
							<summary>
								<h3 key="talkControl" onclick={() => {icache.set('hasTalk', true)}} classes={themedCss.flex}>
									<div classes={themedCss.addControl} /><span> {messages.add} talk {messages.proposal}</span>
								</h3>
							</summary>
							<small class="serif">{messages.talkCaption}</small>
							<p key="talks" classes={themedCss.controlWrapper}>
								<TextInput name="TalkProposal" key="talkProposal"
									maxLength={200}
									placeholder='title max. 200 characters [en]'
									size="l"
									labelHidden={true}
									responsive={true}
								>
									Title for the talk
								</TextInput>
								<br />
								<TextArea name="TalkProposalSummary" key="talkProposalSummary"
									maxLength={1600}
									placeholder='summary max. 1.600 characters [en]'
									labelHidden={true}
									responsive={true}
								>
									Summary of the talk
								</TextArea>
								<br />
							</p>
						</details>
						<details>
							<summary>
								<h3 key="bofControl" onclick={() => {icache.set('hasBof', true)}} classes={themedCss.flex}>
									<div classes={themedCss.addControl} />
									<span> {messages.add} <abbr title="Birds of Feather session">BoF</abbr> {messages.proposal}</span>
								</h3>
							</summary>
							<small class="serif">{messages.bofCaption}</small>
							<p key="bofs" classes={themedCss.controlWrapper}>
								<TextInput name="BofProposal" key="bofProposal"
									maxLength={200}
									placeholder='title max. 200 characters [en]'
									labelHidden={true}
									responsive={true}
								>
									Title for the session
								</TextInput>
								<br />
								<TextArea name="BofProposalSummary" key="bofProposalSummary"
									maxLength={1600}
									placeholder='summary max. 1.600 characters [en]'
									labelHidden={true}
									responsive={true}
								>
									Summary of the session
								</TextArea>
								<br />
							</p>
						</details>
						<div classes={themedCss.submit}>
							<div classes={themedCss.codeOfConduct}>
								<span classes={themedCss.noMB}>
									<a href='https://www.contributor-covenant.org/version/1/4/code-of-conduct' target='_blank'>
										{messages.iConduct}:
									</a>
								</span>
								<Check name="codeOfConduct" required={true} value='agreed'>{messages.iAgree}</Check>
							</div>
							<Button color="blue" spaced={false} responsive={true} type='submit' size='xxl' variant='filled'>
								Register
							</Button>
						</div>
					</div>
					<div classes={themedCss.help}>
						<h3 classes={themedCss.angel}>{messages.offer}</h3>
						<div>
							<Check name="helpsVideoRecording">{messages.oVR}</Check><br />
							<Check name="helpsVideoEdit">{messages.oVE}</Check><br />
							<Check name="helpsModeration">{messages.oMo}</Check><br />
							<Check name="helpsWebdesign">{messages.oWE}</Check><br />
						</div>
					</div>
				</div>

		</form>
	);
});
