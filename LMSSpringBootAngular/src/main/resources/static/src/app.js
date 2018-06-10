var lmsApp=angular.module("lmsApp",["ngRoute","simplePagination"]);

lmsApp.config(["$routeProvider",function($routeProvider){
	return $routeProvider.when("/",{
		redirectTo: "/home"
	})
	
	.when("/home",{
		templateUrl: "./views/home/home.html"
	})
	
	.when("/admin",{
		templateUrl: "./views/admin/admin.html"
	})
	
	.when("/authorList",{
		templateUrl: "./views/admin/author/authorList.html"
	})
	
	
	.when("/borrowerList",{
		templateUrl: "./views/admin/borrower/borrowerList.html"
	})
	
	.when("/publisherList",{
		templateUrl: "./views/admin/publisher/publisherList.html"
	})
	
	.when("/libraryBranchList",{
		templateUrl: "./views/admin/libraryBranch/libraryBranchList.html"
	})
	
	
	.when("/librarian/libraryBranchList",{
		templateUrl: "./views/librarian/libraryBranch/libraryBranchList.html"
	})
	
	
	
	.when("/bookList",{
		templateUrl: "./views/admin/book/bookList.html"
	})
	
	.when("/genreList",{
		templateUrl: "./views/admin/genre/genreList.html"
	})
	
	.when("/bookLoanList",{
		templateUrl: "./views/admin/bookLoan/bookLoanList.html"
	})
	
	.when("/borrower/bookLoanList/:cardNo",{
		templateUrl: "./views/borrower/bookLoanList.html"
	})
	
	.when("/borrower/checkLoan/:cardNo",{
		templateUrl: "./views/borrower/libraryBranchList.html"
	})
	
}])