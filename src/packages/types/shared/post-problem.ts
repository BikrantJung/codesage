export interface IPostProblem {
  problemTitle: string;
  problemDescription: string;
  problemTags: IProblemTag[];
}

export interface IProblemTag {
  tagTitle: string;
  tagViews: number;
}

/**
 * Skip and Take for paginations
 * @example E.g. If there are 10 total records and if skip is 3 and take is 4
 * That will return Records 4, 5, 6 and 7
 * @example userId: IF provided, fetches problems of specific user. 
 */
export interface IGetAllProblems {
  skip?: number;
  take?: number;
  userId?: string;
}
