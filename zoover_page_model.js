import { Selector, ClientFunction, t } from 'testcafe';

export const getLocation = ClientFunction(() => document.location.href);

export class LandingPage {
    constructor() {
        this.reviewButton = Selector('[data-qa="BasicLink-zoover-menu-rightlink"]');
    }
}

export class ReviewSearchPage {
    constructor() {
        this.urlPath = '/review/zoeken';
        this.searchField = '[name="query"]';
        this.findHotel = function(hotelName) { return Selector('a').withText(hotelName) }
    }

    async searchHotel(searchQuery) {
        await t.setTestSpeed(0.4).typeText(this.searchField, searchQuery).setTestSpeed(1)
    }
}

export class ReviewWritePage {
    constructor() {
        this.urlPath = '/review/schrijven';
        this.title = Selector("title");
        this.fieldName = Selector('input[name="name"]')
        this.fieldReviewCommentText = Selector('#reviewStepComment').find('[name="text"]')
        this.fieldReviewCommentSummary = Selector('#reviewStepComment').find('[name="title"]')
        this.reviewStepRatings = Selector('#reviewStepRatings')
        this.email = Selector('[name="email"]')
        this.terms = Selector('.acceptTerms').find('[id="terms"]')
        this.sendReviewButton = Selector('.qaSendReviewButton')

        this.fieldTravelWith = function(travelWith) {
            return Selector('#reviewStepTravelWith').find('[label="' + travelWith + '"]')
        }
        this.fieldTravelYear = function(year) {
            return Selector('[label="' + year + '"]')
        }
        this.fieldTravelMonth = function(month) {
            return Selector('.qaMonth').find('div[label=' + month + ']')
        }
        this.acceptTerms = async function() {
            await t
                .eval(() => {
                    document.querySelector('[for="terms"]').click()
                })
        }
    }

    async placeReviewRatings(score) {
        const reviewElements = this.reviewStepRatings.find('[label="' + score + '"]')
        var elementsCount = await reviewElements.count;
        for (let i = 0; i < elementsCount; i++) {
            const reviewElement = reviewElements.nth(i);
            await t.click(reviewElement)
        }
    }
}

export class ReviewConfirmationPage {
    constructor() {
        this.thankYouText = Selector('.qaThankHeader');
        this.moreTripOrganizersToggle = Selector('[data-qa="toggle-button"]')
        this.sendFeedbackButton = Selector('[data-qa="button-"]')

        this.reviewForOrganizer = function(score) {
            return Selector('[label="[object Object]"]').find('[label="' + score + '"]')
        }
        this.tripOrganizer = function(tripOrganizer) {
            return Selector('[type="button"]').withText(tripOrganizer)
        }
    }
}

export class ReviewThanksPage {
    constructor() {
        this.urlPath = 'review/bedankt'
        this.thankYouText = Selector('.qaThankHeader')
    }
}