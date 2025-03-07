import React from 'react';

const AboutPage = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
			<div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-xl">
				<div className="text-center mb-8 ">
					<h1 className="text-4xl font-semibold text-blue-600 mb-4">
						About This App
					</h1>
					<p className="text-lg text-gray-700 mb-4">
						{' '}
						This app is designed to help you visualize and better understand how
						tree traversal algorithms work. With clear, interactive animations,
						you can explore three popular traversal methods: Pre-order,
						In-order, and Post-order.
					</p>
					<p className="text-lg text-gray-700 mb-6">
						Whether you are a beginner wanting to grasp the fundamentals or an
						advanced learner looking to see the algorithms in action, this app
						makes learning fun and easy.
					</p>
				</div>

				<div className="space-y-8">
					{/* Pre-order Traversal */}
					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
						<h2 className="text-2xl font-semibold text-gray-800">
							Pre-order Traversal
						</h2>
						<p className="text-gray-600 mt-2">
							A traversal technique where the current node is processed before
							its child nodes.
						</p>
						<div className="mt-4">
							<h3 className="text-lg font-semibold text-gray-800">
								Technical Explanation
							</h3>
							<p className="text-gray-600 mt-2">
								In Pre-order Traversal, we visit the root node first, then
								recursively traverse the left subtree, followed by the right
								subtree.
							</p>
							<code className="block bg-gray-100 p-4 mt-4 rounded-md text-sm">
								function preorder(node) {'{'}
								<br />
								&nbsp;&nbsp;if (node == null) return;
								<br />
								&nbsp;&nbsp;console.log(node.value);
								<br />
								&nbsp;&nbsp;preorder(node.left);
								<br />
								&nbsp;&nbsp;preorder(node.right);
								<br />
								{'}'}
							</code>
						</div>
					</div>

					{/* In-order Traversal */}
					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
						<h2 className="text-2xl font-semibold text-gray-800">
							In-order Traversal
						</h2>
						<p className="text-gray-600 mt-2">
							Traversal where the left subtree is visited, then the root node,
							followed by the right subtree.
						</p>
						<div className="mt-4">
							<h3 className="text-lg font-semibold text-gray-800">
								Technical Explanation
							</h3>
							<p className="text-gray-600 mt-2">
								In In-order Traversal, we visit the left subtree first, then the
								root node, followed by the right subtree.
							</p>
							<code className="block bg-gray-100 p-4 mt-4 rounded-md text-sm">
								function inorder(node) {'{'}
								<br />
								&nbsp;&nbsp;if (node == null) return;
								<br />
								&nbsp;&nbsp;inorder(node.left);
								<br />
								&nbsp;&nbsp;console.log(node.value);
								<br />
								&nbsp;&nbsp;inorder(node.right);
								<br />
								{'}'}
							</code>
						</div>
					</div>

					{/* Post-order Traversal */}
					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
						<h2 className="text-2xl font-semibold text-gray-800">
							Post-order Traversal
						</h2>
						<p className="text-gray-600 mt-2">
							Traversal technique where the child nodes are visited before the
							root node.
						</p>
						<div className="mt-4">
							<h3 className="text-lg font-semibold text-gray-800">
								Technical Explanation
							</h3>
							<p className="text-gray-600 mt-2">
								In Post-order Traversal, we traverse the left subtree first,
								then the right subtree, and visit the root node last.
							</p>
							<code className="block bg-gray-100 p-4 mt-4 rounded-md text-sm">
								function postorder(node) {'{'}
								<br />
								&nbsp;&nbsp;if (node == null) return;
								<br />
								&nbsp;&nbsp;postorder(node.left);
								<br />
								&nbsp;&nbsp;postorder(node.right);
								<br />
								&nbsp;&nbsp;console.log(node.value);
								<br />
								{'}'}
							</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
