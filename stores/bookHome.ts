import type { HomeBookEntryFragment } from "#build/graphql-operations";

interface IBookHomeState {
  bookData: HomeBookEntryFragment[] | null;
  isProcessing: boolean;
}

export const useBookHomeStore = defineStore("bookHomeStore", {
  state: (): IBookHomeState => ({
    bookData: null,
    isProcessing: false,
  }),
  getters: {
    existingBookIds(store): number[] | null {
      if (!store.bookData) return null;
      else {
        const bookNumbers = store.bookData.map(({ bookNumber }) => bookNumber);
        return [...new Set(bookNumbers)];
      }
    },
  },
  actions: {
    async refreshBookData() {
      try {
        this.isProcessing = true;
        const { data, errors } = await useGraphqlQuery("homeBooksList", {
          where: {
            isActive: { equals: true },
          },
        });

        if (data.books) {
          this.bookData = data.books;
          this.isProcessing = false;
        } else {
          this.isProcessing = false;
          throw errors;
        }
      } catch (e) {
        console.log("refreshBookData error : ", JSON.stringify(e, null, 2));
        console.log("refreshBookData error s: ", e);
        this.$reset();
      }
    },
    async getBookData(): Promise<HomeBookEntryFragment[]> {
      this.isProcessing = true;
      if (this.bookData && this.bookData.length > 0) {
        this.isProcessing = false;
        return this.bookData;
      } else {
        return await this.refreshBookData().then(() => {
          this.isProcessing = false;
          return this.bookData || [];
        });
      }
    },
  },
});
