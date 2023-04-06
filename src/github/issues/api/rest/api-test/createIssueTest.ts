import {createIssueModel, IssueModel} from '../../../../iscommon/model/user.model.ts'
import { LOGIN } from "../../../../../../credential"
import { CreateIssueResponse } from "../../../../iscommon/data/api/api-service/IssueAPIService"

const fetch = require()

describe('POST /repos/{owner}/{repo}/issues', () => {
    let issue: IssueModel

    beforeEach(async () => {
        issue = createIssueModel(createIssueData())
    })

    it('issue should be created', async () => {
        const IssueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: CreateIssueResponse = await IssueAPIProvider.create(
            LOGIN,
            REPO,
            {
                title: issue.title,
            },
        )

        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual(issue.state)

        const responseUrl: Response = await fetch(response.data.html_url)
        expect(responseUrl.status).toEqual(200)
    })
})