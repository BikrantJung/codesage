export interface IPostProblem {
  problemTitle: string;
  problemDescription: string;
  problemTags: IProblemTag[];
}

export interface IProblemTag {
  tagTitle: string;
  tagViews: number;
}
