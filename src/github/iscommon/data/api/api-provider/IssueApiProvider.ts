import { GitAPIProvider } from "./GitAPIProvider"
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import { CreateIssueRequest } from "../api-data-provider/issueAPIDataProvider"

class IssueAPIProvider extends GitAPIProvider {
    public create<T>(owner: string, repo: string, data: CreateIssueRequest): Promise<AxiosResponse<T>> {
        const config: AxiosRequestConfig = GitAPIProvider.configureRequest(
            '/repos/${owner}/${repo}/issues',
            'POST',
            this.headers,
            JSON.stringify(data),
        )
        return this.sendRequest(config)
    }
}